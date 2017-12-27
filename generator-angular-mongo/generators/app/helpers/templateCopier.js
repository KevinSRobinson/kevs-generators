const chalk = require('chalk');
const settings = require('../settings');


var copyTpl = function (runner, source, destinationPath, settings) {
  try {
    runner.fs.copyTpl(runner.templatePath(source), runner.destinationPath(destinationPath), {
      settings: settings
    });
  } catch (err) {
    console.log(chalk.red(err));
  }
};





var copyTpls = function (runner, source, dest, files) {
  console.log(dest + ' = ' +  chalk.bgYellow(dest));

  console.log(chalk.yellow(source));

  for (var file in files) {
    try {


      let sourcePath = source + '_' + files[file];
      let destPath = dest + files[file];

      //log(files[file]);
      //log(sourcePath);

      console.log(destPath + ' = ' +  chalk.bgBlue(destPath));

      runner.fs.copyTpl(runner.templatePath( sourcePath ), runner.destinationPath(destPath), {
        data: settings
      });



    } catch (err) {
      console.log(chalk.red(err));
      //console.log(chalk.green(files(file)));
    }
  }
};




module.exports.copyTpls = copyTpls;
module.exports.copyTpl = copyTpl;
