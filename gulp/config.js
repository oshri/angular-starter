'use strict';

export default {
	root: './',
	client: './client/',
	temp: './temp/',
	build: './build/',
	port: 3000,
	UIPort: 3001,

	styles: {
		src: 'client/styles/*.scss',
		prodSourcemap: false,
		sassIncludePaths:[],
		temp: 'temp/css',
		dest: 'build/css'
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
		],
		temp: 'temp/js',
		dest: 'build/js'
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
		templates: [
			'client/core/views/*.html',
			'client/components/**/views/*.html'
		],
		templatesOptions: {
			file: 'templates.js',
			options: {
				module: 'core',
				standAlone: false
			}
		},
		temp: 'temp/js',
		dest: 'build/js'
	},

	bowerOptions: {
		json: './bower.json',
        directory: './bower_components/',
        ignorePath: '../'
	},

	packages: [
        './package.json',
        './bower.json'
    ],

    browserify: {
    	bundleName: 'main.mdl.js',
    	prodSourcemap: false
  	},

  	test: {
	    karma: './karma.conf.js'
	}
};