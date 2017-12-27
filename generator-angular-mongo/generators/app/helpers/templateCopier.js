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



var copyTpls = function (runner, source, destPath, files) {


  console.log(chalk.yellow(source));

  for (var file in files) {
    try {

      console.log(chalk.white('file ' + file+  ' = ' + files[file]));


      runner.fs.copyTpl(runner.templatePath( source + '_' + files[file]), runner.destinationPath(destPath + files[file]), {
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
