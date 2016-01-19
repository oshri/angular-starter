'use strict';

import config        	from '../config';
import gulp          	from 'gulp';
import gulpLoadPlugins 	from 'gulp-load-plugins';
import browserSync   	from 'browser-sync';
import merge         	from 'merge-stream';
import log 				from '../util/log';

const $ = gulpLoadPlugins();

gulp.task('views', () => {

	const indexFile = gulp.src(config.views.index)
	    .pipe(gulp.dest(config.temp));

	let files = [].concat(config.views.templates);

	const templateCache = gulp.src(files)
		.pipe($.minifyHtml({empty: true}))
		.pipe($.angularTemplatecache(
			config.views.templatesOptions.file,
			config.views.templatesOptions.options))
		.pipe(gulp.dest(config.scripts.temp))
		.pipe(browserSync.stream());


	return merge(indexFile, templateCache);
});