module.exports.generate = function (data, runner, _srcPath, destPath) {  

  var _srcComponentsPath = _srcPath + '/Components/';
  var _srcListComponentsPath = _srcComponentsPath + '/List/';
  var _srcDetailsPath = _srcComponentsPath + '/Details/';
  var _srcHomePath = _srcComponentsPath + '/Home/';
  var _srcFieldsPath = _srcComponentsPath + '/Fields/';

  var destPathBase = destPath + '/' + data.camelCasePlural + '/';
  var destComponentsPath = destPath + data.camelCasePlural + '/Components/';
  var destListComponentsPath = destComponentsPath + 'List/';
  var destDetailsComponentsPath = destComponentsPath + 'Details/';
  var destHomeComponentsPath = destComponentsPath + 'Home/';
  var destFieldsComponentsPath = destComponentsPath + 'Fields/';


  data.copier.copyTpl(runner, `${_srcListComponentsPath}_listComponent.js`, `${destListComponentsPath}${data.camelCasePlural}List.js`, data);
  data.copier.copyTpl(runner, `${_srcListComponentsPath}_listComponentTemplate.html`, destListComponentsPath + data.camelCasePlural + 'ListTemplate.html', data);

  // Details
  data.copier.copyTpl(runner, _srcDetailsPath + '_details.js', destDetailsComponentsPath + data.camelCase + 'Details.js', data);
  data.copier.copyTpl(runner, _srcDetailsPath + '_detailsTemplate.html', destDetailsComponentsPath + data.camelCase + 'DetailsTemplate.html', data);

  // Home
  data.copier.copyTpl(runner, _srcHomePath + '_home.js', destHomeComponentsPath + data.camelCasePlural + 'Home.js', data);
  data.copier.copyTpl(runner, _srcHomePath + '_homeTemplate.html', destHomeComponentsPath + data.camelCasePlural + 'HomeTemplate.html', data);

  // Feilds
  data.copier.copyTpl(runner, _srcFieldsPath + '_fields.js', destFieldsComponentsPath + data.camelCasePlural + 'Fields.js', data);
  data.copier.copyTpl(runner, _srcFieldsPath + '_fieldsTemplate.html', destFieldsComponentsPath + data.camelCasePlural + 'FieldsTemplate.html', data);
   

  data.copier.copyTpl(runner, _srcRoute, destPathBase, data);
};
