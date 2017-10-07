let getOutputPath = function (runner) {
  return runner.config.get('destPath');
};
let saveOutputPath = function (runner, destPath) {
  return runner.config.set('destPath', destPath);
};
module.exports.getOutputPath = getOutputPath;
module.exports.saveOutputPath = saveOutputPath;
