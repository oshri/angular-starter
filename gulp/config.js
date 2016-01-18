'use strict';

export default {
	root: './',
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
		core: 'client/core/views/*.html',
		components: 'client/components/**/views/*.html',
		dest: 'build/js'
	},

	bowerOptions: {
		json: './bower.json',
        directory: './bower_components/',
        ignorePath: '../..'
	},

	packages: [
        './package.json',
        './bower.json'
    ]
};