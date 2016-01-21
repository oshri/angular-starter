'use strict';

import config from '../config';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import log from '../util/log';

const $ = gulpLoadPlugins();

gulp.task('jasmine-browser', ()=> {
	log("Start Jasmine");

	let files = [].concat(config.unitTest.lib,config.unitTest.mainModule,config.unitTest.specs);

	return gulp.src(files)
		.pipe($.watch(files))
		.pipe($.jasmineBrowser.specRunner())
		.pipe($.jasmineBrowser.server({port: 8888}));
});