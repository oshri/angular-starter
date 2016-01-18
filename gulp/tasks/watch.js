'use strict';

import config 	from '../config';
import gulp 	from 'gulp';

gulp.task('watch', ['browserSync'], () => {
	global.isWatching = true;

	gulp.watch(config.scripts.all, ['lint']);
	gulp.watch(config.styles.src, ['styles']);
	gulp.watch([config.views.core,config.views.components,config.views.index], ['views']);
});