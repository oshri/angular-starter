'use strict';

import config 		from '../config';
import gulp 		from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import log from '../util/log';

const $ = gulpLoadPlugins();

gulp.task('open-jasmine-reporter', () => {
	// Karma reporter

	return gulp.src(__filename)
  		.pipe($.open({uri: 'http://localhost:8888'}));
});