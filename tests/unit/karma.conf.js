module.exports = function(config) {
    config.set({
      frameworks: ['jasmine'],
      singleRun: true,
      browsers: ['PhantomJS'],
      files: [
        '../../node_modules/angular/angular.js',
        '../../node_modules/angular-aria/angular-aria.js',
        '../../node_modules/angular-animate/angular-animate.js',
        '../../node_modules/angular-material/angular-material.js',
        '../../node_modules/angular-mocks/angular-mocks.js',
        '../../app/components/test/*.js',
        '../../app/components/test/**/*.js',

        '*.spec.js'
      ]
    })
  }
