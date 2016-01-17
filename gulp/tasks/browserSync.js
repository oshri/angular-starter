'use strict';

import config 		from '../config';
import gulp 		from 'gulp';
import url 			from 'url';
import browserSync  from 'browser-sync';

gulp.task('browserSync',function(){
	const INDEX = 'index.html';
	const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

	browserSync.init({
		server: {
			baseDir: config.build,
			middleware: function(req, res, next){
				let fileHref = url.parse(req.url).href;

				if(!ASSET_EXTENSION_REGEX.test(fileHref)){
					req.url = '/' + INDEX;
				}

				return next();
			}
		},
		port: config.port,
		ui: {
			port: config.UIPort
		},
		ghostMode: {
			links: false
		}
	});
});