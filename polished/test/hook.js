'use strict';

var fs = require('fs');

module.exports = {
  afterEnd: function(runner) {
    var coverage = runner.page.evaluate(function() {
      return window.__coverage__;
    });
    if (coverage) {
      console.log('Writing coverage to coverage/coverage.json');
      fs.write('test/coverage/coverage.json', JSON.stringify(coverage), 'w');
    } else {
      console.log('No coverage data generated');
    }
  }
};