let appDetails = function () {

  let name = runner.config.get('destPath');
  let title = 'Generated App';
  let data = null;
  let useAuth0 = false;

  return {
    name: name,
    title: title,
    data: null,
    useAuth0: useAuth0,
  }
};

module.exports.appDetails = appDetails;
