'use strict';

import fs 			from 'fs';
import gulp 		from 'gulp';
import onlayScripts from './util/scriptsFilter';

const tasks = fs.readdirSync('./gulp/tasks/').filter(onlayScripts);

gulp.on('stop',function(){
	if(!global.isWatching){
		process.nextTick(function(){
			process.exit(0);
		});
	}
});

tasks.forEach((task) => {
	require('./tasks/' + task);
});