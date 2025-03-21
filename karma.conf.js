module.exports = function(config) {
    config.set({
      // Base path for Karma to resolve files
      basePath: '',
  
      // Testing frameworks to use
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
  
      // Files/patterns to load in the browser
      files: [
        'src/test.ts',
        { pattern: 'src/**/*.spec.ts', watched: false }
      ],
  
      // Preprocessors to use (for TypeScript files)
      preprocessors: {
        'src/**/*.ts': ['coverage', '@angular-devkit/build-angular']
      },
  
      // Reporters to use (coverage reporting)
      reporters: ['progress', 'coverage'],
  
      // Output location for coverage reports
      coverageReporter: {
        dir: 'coverage/',  // Output directory for coverage reports
        reporters: [
          { type: 'html', subdir: 'report-html' },  // HTML report
          { type: 'lcov', subdir: 'report-lcov' },  // LCOV report
          { type: 'text-summary' }  // Summary output to console
        ]
      },
  
      // Browsers to launch
      browsers: ['ChromeHeadless'],
  
      // Watch files and run tests
      singleRun: true
    });
  };
  