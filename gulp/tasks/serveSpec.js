'use strict';

import gulp 		from 'gulp';
import runSequence 	from 'run-sequence';

gulp.task('serve-spec', ['scripts','bower-uglify'], (cb) => {
	global.isProd = false;
	runSequence(['jasmine-browser','open-jasmine-reporter'], cb);
});
