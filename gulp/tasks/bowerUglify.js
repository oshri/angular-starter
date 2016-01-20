'use strict';

import config from '../config';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import log from '../util/log';

const $ = gulpLoadPlugins();

gulp.task('bower-uglify', [], () =>{
	return gulp.src('./bower.json')
        .pipe($.mainBowerFiles())
        // .pipe($.uglify())
        .pipe($.concat('lib.js'))
        .pipe(gulp.dest(config.scripts.temp));
});