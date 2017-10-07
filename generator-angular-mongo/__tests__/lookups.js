'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angular-mongo:lookups', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/lookups'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
