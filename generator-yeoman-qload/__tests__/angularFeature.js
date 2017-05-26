'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-yeoman-qload:angularFeature', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/angularFeature'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
