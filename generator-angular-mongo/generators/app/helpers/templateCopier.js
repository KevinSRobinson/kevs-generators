const chalk = require('chalk');


var copyTpl = function (runner, source, destinationPath, data) {
  try {
    runner.fs.copyTpl(runner.templatePath(source), runner.destinationPath(destinationPath), {
      data: data
    });
  } catch (err) {
    console.log(chalk.red(err));
  }
};



var copyTpls = function (runner, source, destPath, data, files) {

  for (var file in files) {
    try {

      runner.fs.copyTpl(runner.templatePath( source + '_' + file), runner.destinationPath(destPath + file), {
        data: data
      });



    } catch (err) {
      console.log(chalk.red(err));
    }
  }
};




module.exports.copyTpls = copyTpls;
module.exports.copyTpl = copyTpl;
