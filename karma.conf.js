'use strict';

const istanbul = require('browserify-istanbul');
const isparta  = require('isparta');

const karmaBaseConfig = {

  basePath: './',

  singleRun: true,

  frameworks: ['jasmine', 'browserify'],

  preprocessors: {
    'client/**/*.js': ['browserify', 'coverage']
  },

  browsers: ['Chrome'],

  reporters: ['progress', 'coverage'],

  autoWatch: true,

  browserify: {
    debug: true,
    extensions: ['.js'],
    transform: [
      'babelify',
      'browserify-ngannotate',
      'bulkify',
      istanbul({
        instrumenter: isparta,
        ignore: ['**/node_modules/**', 'client/**/test/**']
      })
    ]
  },

  proxies: {
    '/': 'http://localhost:9876/'
  },

  urlRoot: '/__karma__/',

  files: [
    // 3rd-party resources
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/es5-shim/es5-shim.js',

    // app-specific code
    'client/main.mdl.js',

    // test files
    'client/**/tests/unit/**/*.js'
  ]

};

const customLaunchers = {
  chrome: {
    base: 'SauceLabs',
    browserName: 'chrome'
  }
};

const ciAdditions = {
  sauceLabs: {
    testName: 'Karma Unit Tests',
    startConnect: false,
    build: process.env.TRAVIS_BUILD_NUMBER,
    tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
    username: process.env.TRAVIS_USER,
    accessKey: process.env.TRAVIS_ACCESS_KEY
  },
  browsers: Object.keys(customLaunchers),
  customLaunchers: customLaunchers,
  reporters: ['progress', 'coverage', 'saucelabs']
};

module.exports = function(config) {
  const isCI = process.env.CI;
  config.set(isCI ? Object.assign(karmaBaseConfig, ciAdditions) : karmaBaseConfig);
};
