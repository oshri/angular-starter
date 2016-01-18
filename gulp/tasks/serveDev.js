'use strict';

import gulp 		from 'gulp';
import runSequence 	from 'run-sequence';

gulp.task('serve-dev', ['clean','bower'], (cb) => {
	global.isProd = false;
	runSequence(['styles','views'], 'watch', cb);
});
