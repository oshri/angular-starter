'use strict';

import gulp 		from 'gulp';
import runSequence 	from 'run-sequence';

gulp.task('serve-spec', [], (cb) => {
	global.isProd = false;
	runSequence(['jasmine','open-jasmine-reporter'], cb);
});
