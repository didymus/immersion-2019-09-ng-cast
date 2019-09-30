const IS_TEST = process.env.NODE_ENV === 'test';

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    client: {
      mocha: {
        reporter: 'html',
      },
    },
    preprocessors: {
      'src/templates/*.html': ['ng-html2js'],
    },
    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
    },
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/sinon/pkg/sinon-1.17.7.js',
      'test/lib/chai.js',
      'src/index.js',
      'src/**/*.js',
      'test/**/*.js',
      'src/templates/*.html',
    ],
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor',
    ],
    port: 9876,
    logLevel: config.LOG_INFO,
    browsers: [IS_TEST ? 'ChromeHeadless' : 'Chrome'],
    singleRun: IS_TEST,
  });
};
