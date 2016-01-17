'use strict';

import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import sourcemaps   from 'gulp-sourcemaps';
import sass         from 'gulp-sass';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('styles', function(){

	const createSourcemap = !global.isProd || config.styles.prodSourcemap;
	const AUTOPREFIXER_BROWSERS = [
	    'ie >= 10',
	    'ie_mob >= 10',
	    'ff >= 30',
	    'chrome >= 34',
	    'safari >= 7',
	    'opera >= 23',
	    'ios >= 7',
	    'android >= 4.4',
	    'bb >= 10'
	];

	return gulp.src(config.styles.src)
		.pipe(gulpif(createSourcemap, sourcemaps.init()))
		.pipe(sass({
			sourceComments: !global.isProd,
			outputStyle: global.isProd ? 'compressed' : 'nested',
			includePaths: config.styles.sassIncludePaths
		}))
		.on('error', handleErrors)
		.pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
		.pipe(gulpif(
			createSourcemap,sourcemaps.write(global.isProd ? './' : null)
		))
		.pipe(gulp.dest(config.styles.dest));
});