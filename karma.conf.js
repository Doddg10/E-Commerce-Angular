module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      browsers: ['ChromeHeadless'], // Using ChromeHeadless for CI
      singleRun: true, // Run tests only once
      restartOnFileChange: true,
    });
  };
  