'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  writing() {
    var srcClientPath = './';
    var destPath = 'C:/Repos/Generated/';
    var destClientPath = destPath + 'Src/Client/';
    var destFeaturesPath = destClientPath + 'Features/';
    var destLookupListsPath = destFeaturesPath + 'LookupLists/';

    this.fs.copy(
      this.templatePath(srcClientPath),
      this.destinationRoot(destLookupListsPath)
    );
    //serverCore.generate(data, this, srcServerPath, destServerPath + '/');
  }
  install() {}
};
