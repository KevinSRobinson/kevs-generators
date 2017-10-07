let getOutputPath = function (runner) {
  return runner.config.get('destPath');
};

module.exports.getOutputPath = getOutputPath;
