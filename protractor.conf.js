require('babel-core/register');

const gulpConfig = require('./gulp/config').default;

exports.config = {

  allScriptsTimeout: 11000,

  baseUrl: `http://localhost:${gulpConfig.browserPort}/`,

  capabilities: {
    browserName: 'chrome',
    name: 'Protractor Tests'
  },

  framework: 'jasmine2',

  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },

  specs: [
    'client/**/tests/e2e/**/*_spec.js'
  ],
};



