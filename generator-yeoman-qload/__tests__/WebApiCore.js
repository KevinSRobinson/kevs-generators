'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-yeoman-qload:WebApiCore', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/WebApiCore'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
