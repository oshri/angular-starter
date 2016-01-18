'use strict';

import loadPlugins from 'gulp-load-plugins';

const $ = loadPlugins({lazy:true});

export default (msg) => {
	if (typeof(msg) === 'object') {
		$.util.log($.util.colors.yellow('#############  LOG #############'));
        for (var item in msg) {
        	if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.green('key:'),$.util.colors.white(item),$.util.colors.green('value:'),$.util.colors.white(msg[item]));
            }
        }
        $.util.log($.util.colors.yellow('#############  END #############'));
    } else {
        $.util.log($.util.colors.yellow('############# LOG '),$.util.colors.white(msg));
    }
}