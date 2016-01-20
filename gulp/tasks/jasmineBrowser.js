'use strict';

import config from '../config';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import log from '../util/log';

const $ = gulpLoadPlugins();

gulp.task('jasmine', ()=> {

	log("Start Jasmine");

	let files = [].concat('temp/js/lib.js','temp/js/main.mdl.js',config.test.specs);

	log("Files:", files);

	return gulp.src(files)
		.pipe($.watch(files))
		.pipe($.jasmineBrowser.specRunner())
		.pipe($.jasmineBrowser.server({port: 8888}));
});