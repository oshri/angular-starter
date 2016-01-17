'use strict';

import config 	from '../config';
import gulp 	from 'gulp';

gulp.task('watch', ['browserSync'], function(){
	global.isWatching = true;

	gulp.watch(config.styles.src, ['styles']);
});