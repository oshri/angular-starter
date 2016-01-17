'use strict';

export default {
	client: './client/',
	build: './build/',
	port: 3000,
	UIPort: 3001,

	styles: {
		src: 'client/styles/*.scss',
		dest: 'build/css',
		prodSourcemap: false,
		sassIncludePaths:[]
	},

	scripts: {
		all: 'client/**/*.js',
		components:[
			'client/**/main.mdl.js',
			'client/**/*.mdl.js',
			'client/**/*.js',
			'!' + 'client/**/*.spec.js'
		],
		order:[
			'**/main.mdl.js',
			'**/*.mdl.js',
			'**/*.js'
		]
	},

	assetExtensions: [
	    'js',
	    'css',
	    'png',
	    'jpe?g',
	    'gif',
	    'svg',
	    'eot',
	    'otf',
	    'ttc',
	    'ttf',
	    'woff2?'
	],

	views: {
		index: 'client/index.html',
		src: 'client/components/**/views/*.html',
		dest: 'build/js'
	},

	init: function(){
		this.views.watch = [
			this.views.index,
			this.views.src
		];

		return this;
	}

}.init();