var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generate = function (runner, basepath, data) {
  function js_traverse(o) {
    //if ( typeof o == "object") {
    for (var key in o) {
      for (var subkey in o[key]) {
        console.log("subkey: ", o[key][subkey])
      }
    }
    //} 
  }
 var commaSeperatedLayoutControlList = "";

  js_traverse(data.model.properties)

  for (var key in data.model.properties) {
    commaSeperatedLayoutControlList += "Me.lci" + key + ",";
  }

  commaSeperatedLayoutControlList = commaSeperatedLayoutControlList.replace(/,(\s+)?$/, '');


  var featureFolderName = basepath + '/' + data.plural + '/';
  var interfaceName = 'I' + runner.props.featureName + 'sEdit';
  var presenterName = runner.props.featureName + 'sEditPresenter';
  var userControlName = 'uc' + data.name + 'Edit';
  var ttt = _.kebabCase;

  var InstantiateControl = function (key, subkey) {

    switch (data.model.properties[key][subkey]) {
      case "string":
        return GetInstantiateControl('te', key, 'TextEdit');
      case "date":
        return GetInstantiateControl('de', key, 'DateEdit');
      case "bool":
        return GetInstantiateControl('ce', key, 'CheckEdit');
      case "number":
        return GetInstantiateControl('ne', key, 'TextEdit');
    }
  }

  var BeginInitEditor = function (key, subkey) {
     return getBeginInitEditor('lci', key);
  }

  var BeginInitLabel = function (key, subkey) {
       return 'CType(Me.lc' + key + ', System.ComponentModel.ISupportInitialize).BeginInit()';
  }

  var getBeginInitLabel = function (prefix, key) {
    return 'CType(Me.' + prefix + key + ', System.ComponentModel.ISupportInitialize).BeginInit()';
  }

  var getBeginInitEditor = function (prefix, key) {
    return 'CType(Me.' + prefix + data._.startCase(key).replace(" ", "") + '.Properties, System.ComponentModel.ISupportInitialize).BeginInit()';
  }

  var SetFieldProperties = function (key, subkey) {

    switch (data.model.properties[key][subkey]) {
      case "string":
        Getlabel(key)
    }
  };

  var GetLayoutControlItem = function (key) {
    return 'Me.lci' + data._.startCase(key).replace(" ", "") + '.Control = Me.te' + data._.startCase(key).replace(" ", "") + '\r' +


      'Me.lci' + data._.startCase(key).replace(" ", "") + '.Location = New System.Drawing.Point(0, 0)' +  '\r' +
      'Me.lci' + data._.startCase(key).replace(" ", "") + '.Size = New System.Drawing.Size(231, 24)' +  '\r' +
      `Me.lci` + data._.startCase(key).replace(" ", "") + `.Text = "` + data._.startCase(key).replace(" ", "") +  `" \r` +
      'Me.lci' + data._.startCase(key).replace(" ", "") + '.TextSize = New System.Drawing.Size(51, 13)' +  '\r';
  };


  var ControlFields = function (key, subkey) {
    switch (data.model.properties[key][subkey]) {
      case "string":
        return GetControLField('te', key, 'TextEdit');
      case "date":
        return GetControLField('de', key, 'DateEdit');
      case "bool":
        return GetControLField('ce', key, 'CheckEdit');
      case "number":
        return GetControLField('ne', key, 'TextEdit');
    }
  };

   var SetLayoutControl = function (key, subkey) {
    switch (data.model.properties[key][subkey]) {
      case "string":
        return getLayoutControlControl('te', key);
      case "date":
        return getLayoutControlControl('de', key);
      case "bool":
        return getLayoutControlControl('ce', key);
      case "number":
        return getLayoutControlControl('ne', key);
    }
  };
  

  var AddTolayoutControl = function (key, subkey) {
    switch (data.model.properties[key][subkey]) {
      case "string":
        return getAddTolayoutControl('te', key);
      case "date":
        return getAddTolayoutControl('de', key);
      case "bool":
        return getAddTolayoutControl('ce', key);
      case "number":
        return getAddTolayoutControl('ne', key);
    }
  };

  var getLayoutControlControl  = function (prefix, key) {
    return 'Me.lci' + data._.startCase(key).replace(" ", "") + '.Control = Me.' + prefix + data._.startCase(key).replace(" ", "") ;
  };

  var getAddTolayoutControl = function (prefix, key) {
    return 'Me.LayoutControl1.Controls.Add(Me.' + prefix + data._.startCase(key).replace(" ", "") + ')';
  };

  var GetInstantiateControl = function (prefix, key, editorType) {
    return 'Me.' + prefix + data._.startCase(key).replace(" ", "") + ' = New DevExpress.XtraEditors.' + editorType + '()';
  }

  var GetControLField = function (prefix, key, editorType) {
    return 'Friend WithEvents ' + prefix + data._.startCase(key).replace(" ", "") + ' As DevExpress.XtraEditors.' + editorType;
  }



  data.InstantiateControl = InstantiateControl;
  data.ControlFields = ControlFields;
  data.BeginInitLabel = BeginInitLabel;
  data.BeginInitEditor = BeginInitEditor;
  data.AddTolayoutControl = AddTolayoutControl;
  data.GetLayoutControlItem = GetLayoutControlItem;
data.commaSeperatedLayoutControlList =commaSeperatedLayoutControlList;
 data.SetLayoutControl = SetLayoutControl;



  ///////////////////////////////
  //UserControl - Code Behind
  runner.fs.copyTpl(
    runner.templatePath('MVP/Edit/UserControl/_uCEdit.vb'),
    runner.destinationPath(featureFolderName + '/Edit/' + userControlName + '.vb'), {
      data: data
    }
  );

  //UserControl - Designer
  runner.fs.copyTpl(
    runner.templatePath('MVP/Edit/UserControl/_uCEdit.Designer.vb'),
    runner.destinationPath(featureFolderName + '/Edit/' + userControlName + '.Designer.vb'), {
      data: data
    }
  );

  //UserControl - Resources File
  runner.fs.copyTpl(
    runner.templatePath('MVP/Edit/UserControl/_uCEdit.resx'),
    runner.destinationPath(featureFolderName + '/Edit/' + userControlName + '.resx'), {
      data: data
    }
  );

}