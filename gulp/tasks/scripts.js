'use strict';

import config 			     from '../config';
import gulp 			       from 'gulp';
import gulpLoadPlugins 	 from 'gulp-load-plugins';
import source       	   from 'vinyl-source-stream';
import buffer       	   from 'vinyl-buffer';
import watchify     	   from 'watchify';
import browserify   	   from 'browserify';
import babelify     	   from 'babelify';
import browserSync  	   from 'browser-sync';
import ngAnnotate   	   from 'browserify-ngannotate';
import handleErrors 	   from '../util/handleErrors';
import log 				       from '../util/log';

const $ = gulpLoadPlugins();

function createSourcemap() {
  return !global.isProd || config.browserify.prodSourcemap;
}

function buildScript(file) {
  
  let bundler = browserify({
    entries: [config.client + file],
    debug: createSourcemap(),
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd
  });

  if ( !global.isProd ) {
    bundler = watchify(bundler);

    bundler.on('update', function() {
      rebundle();
      log('Rebundle...');
    });
  }

  const transforms = [
    { 'name':babelify, 'options': {}},
    { 'name':ngAnnotate, 'options': {}},
    { 'name':'brfs', 'options': {}},
    { 'name':'bulkify', 'options': {}}
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform.name, transform.options);
  });

  function rebundle() {
    const stream = bundler.bundle();
    const sourceMapLocation = global.isProd ? './' : '';

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe($.if(createSourcemap(), buffer()))
      .pipe($.if(createSourcemap(), $.sourcemaps.init({ loadMaps: true })))
      .pipe($.if(global.isProd, $.streamify($.uglify({
        compress: { drop_console: true }
      }))))
      .pipe($.if(createSourcemap(), $.sourcemaps.write(sourceMapLocation)))
      .pipe(gulp.dest(config.scripts.temp))
      .pipe(browserSync.stream());
  }

  return rebundle();

}

gulp.task('scripts', () => {
	return buildScript('main.mdl.js');
});