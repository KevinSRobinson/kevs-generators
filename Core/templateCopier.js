const chalk = require('chalk');
const settings = require('../settings');

var fs = require('fs');
var copyTplsWithData = function (runner, source, dest, feature, data) {
  console.log('dest = '  +  chalk.bgYellow(dest));
 

  if (source != undefined)
  {
    var files1 = fs.readdirSync('./generators/feature/templates/' + source + "/");

    console.log('source = ' + chalk.yellow(source));

    for (var file in files1) {
      try {
  
  
        let sourcePath = source + files1[file];
        let destPath = dest + feature + files1[file].replace('_', '');
  
        runner.fs.copyTpl(runner.templatePath( sourcePath ), runner.destinationPath(destPath), {
          data: data
        });
   
  
      } catch (err) {
        console.log(chalk.red(err));
      }
    }
  }

 
};

module.exports.copyTplsWithData = copyTplsWithData;
