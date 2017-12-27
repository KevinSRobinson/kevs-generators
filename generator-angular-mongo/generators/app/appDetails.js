let appDetails = function () {

  let name = runner.config.get('destPath');
  let title = 'Generated App';
  let data = null;

  return {
    name: name,
    title: title,
    data: null,
  }
};

module.exports.appDetails = appDetails;
