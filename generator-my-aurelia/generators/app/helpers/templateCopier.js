 var copier = function (runner, source, destinationPath, data) {
    runner.fs.copyTpl(runner.templatePath(source), runner.destinationPath(destinationPath), {
      data: data
    });
  };


  var copy = function (runner, source, destinationPath, data) {
    runner.fs.copy(runner.templatePath(source), runner.destinationPath(destinationPath), {
      data: data
    });
  };


  module.exports.copyTpl = copier
  module.exports.copy = copy