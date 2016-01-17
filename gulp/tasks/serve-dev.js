'use strict';

import config 		from '../config';
import gulp 		from 'gulp';
import runSequence 	from 'run-sequence';

gulp.task('serve-dev', function(cb){
	global.isProd = false;
	runSequence(['styles','views'], 'watch' , cb);
});
