const copier = require('../templateCopier.js')

module.exports.generate = function (data, runner, basepath) {

  var _srcViewModelsPath = './Client/Features/Modals/';

  copier.copyTpl(runner,_srcViewModelsPath + '_viewModal.html', basepath + '/Modals/viewModal.html', data);
  copier.copyTpl(runner, _srcViewModelsPath + '_modalServices.js', basepath + '/Modals/modalServices.js', data);

};
