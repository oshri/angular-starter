# Angular Starter Kit

[![devDependency Status](https://david-dm.org/oshri/angular-starter/dev-status.svg)](https://david-dm.org/oshri/angular-starter#info=devDependencies) [![Build Status](https://travis-ci.org/oshri/angular-starter.svg)](https://travis-ci.org/oshri/oshri/angular-starter)

This starter kit uses the latest versions of the following libraries:

- [AngularJS](http://angularjs.org/)
- [SASS](http://sass-lang.com/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)


# Before Started

 - Install Node
 	- on OSX install [home brew](http://brew.sh/) and type `brew install node`

 - Open terminal
	- Type `npm install -g node-inspector bower gulp karma karma-cli`

# Getting up and running

1. Clone this repo from `https://github.com/oshri/angular-starter.git`
2. Run `npm install` from the root directory

## Table of Contents

  1. [Gulp Tasks](#gulp-tasks)
  2. [App Config](#app-config)
  3. [Files Naming Convention](#files-naming-convention)
  4. [App Structure](#apps-tructure)
  5. [Main App Module](#main-app-module)

## Gulp Tasks

	1. gulp serve-dev
		a. starts a dev server via browser-sync, serving the client folder
			& watch for scss and js changes, rebuilds and then refreshes the browser.

	2. gulp test
		a. Runs all test files in command line. matching *.spec.js inside the app/**/**/test/unit/ folder.

	3. gulp serve-spec
		a. This launcher is typically used in CI to run your unit tests across many browsers and platforms on Sauce Labs. However, you can also use it locally to debug tests in browsers not available on your machine.

	4. gulp clean
		a. Remove all files from the temp folder.

	5. gulp lint

	6. gulp bump





## App Config

```javascript
	


```

## Files Naming Convention

 * Module
 	- moduleName.mdl.js

 * Controller
 	- controllerName.ctrl.js

 * Service
 	- serviceName.srv.js


 * Directive ( Component )
 	- directiveName.dir.js


 * View      ( Template )
 	- templateName.tpl.html

 * Filter
 	- filterName.fil.js



## App Structure

```javascript
	


```


## Main App Module

```javascript
	


```

