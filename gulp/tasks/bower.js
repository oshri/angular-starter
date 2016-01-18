'use strict';

import config 	from '../config';
import gulp 	from 'gulp';
import wiredep 	from 'wiredep';

const wire = wiredep.stream;

gulp.task('bower', () => {

	return gulp
		.src(config.views.index)
		.pipe(wire(config.bowerOptions))
		.pipe(gulp.dest(config.build));

});
