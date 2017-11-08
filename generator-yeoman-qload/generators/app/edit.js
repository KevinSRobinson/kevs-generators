var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));
var fieldsDesignerHelperHelper = require('./helpers/Fields/fieldsDesignerHelperHelper');


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
  var interfaceName = 'IEdit' + data.name + 'View';
  var presenterName = runner.props.featureName + 'sEditPresenter';
  var userControlName = 'uc' + data.name + 'Edit';
  var ttt = _.kebabCase;
  var viewModelName = data.name + 'ViewModel';


  var InstantiateControl = function (key, subkey) {
    switch (data.model.properties[key][subkey]) {
      case "string":
        return GetInstantiateControl('te', key, 'string');
      case "date":
        return GetInstantiateControl('de', key, 'date');
      case "bool":
        return GetInstantiateControl('ce', key, 'bool');
      case "number":
        return GetInstantiateControl('ne', key, 'number');
      case "lookup":
        return GetInstantiateControl('lue', key, 'lookup');
      case "memo":
        return GetInstantiateControl('me', key, 'memo');
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
    return 'CType(Me.' + prefix + data.getNameFromKey(key) + '.Properties, System.ComponentModel.ISupportInitialize).BeginInit()';
  }
  var SetFieldProperties = function (key, subkey) {
    switch (data.model.properties[key][subkey]) {
      case "string":
        Getlabel(key)
    }
  };


  var ControlFields = function (key, subkey) {
    switch (data.model.properties[key][subkey]) {
      case "string":
        return GetControLField('te', key, 'string');
      case "date":
        return GetControLField('de', key, 'date');
      case "bool":
        return GetControLField('ce', key, 'bool');
      case "number":
        return GetControLField('ne', key, 'number');
      case "lookup":
        return GetControLField('lue', key, 'lookup');
      case "memo":
        return GetControLField('me', key, 'memo');
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
       case "lookup":
        return  getLayoutControlControl('lue', key);
      case "memo":
        return  getLayoutControlControl('me', key);
    }
  };


  var getLayoutControlControl = function (prefix, key) {
    return 'Me.lci' + data.getNameFromKey(key) + '.Control = Me.' + prefix + data.getNameFromKey(key);
  };

  var getControlFromType  = function(type){
     switch (type) {
      case "string":
        return 'Qload.CustomControls.Editors.QloadLabel'
      case "lookup":
        return 'Qload.CustomControls.Lookups.QloadLookupEdit'
      case "date":
        return 'DevExpress.XtraEditors.DateEdit'
      case "bool":
        return 'DevExpress.XtraEditors.CheckEdit'
      case "number":
        return 'DevExpress.XtraEditors.SpinEdit'
      case "memo":
        return 'DevExpress.XtraEditors.MemoEdit'
    }
  }

  var GetInstantiateControl = function (prefix, key, editorType) {
    return 'Me.' + prefix + data.getNameFromKey(key) + ' = New ' +  getControlFromType(editorType) + '()';
  }

  var GetControLField = function (prefix, key, editorType) {
    return 'Friend WithEvents ' + prefix + data.getNameFromKey(key)  + ' as ' + getControlFromType(editorType);
  }


  // Editor
  

 

  

 




  //////////////////////////////////////////////////////////////////////
  ///////////Returns the Setting Mappings for a property ///////////////
  //////////////////////////////////////////////////////////////////////
  //  Public Property Branch As BranchViewModel Implements IEditBranchView.Branch
  //  Set
  //    Me.teID.EditValue = Value.Id       <<   creates these lines
  //    Me.teName.EditValue = Value.Name   <<
  //    Me.teAddress1.EditValue = Value.Address1 <<                   
  //  End Set
  /////////////////////////////////////////////////////
  var getViewModelPropertyFields = function () {
    var returnValue = "";
    for (var key in data.model.properties) {
      for (var subkey in data.model.properties[key]) {         
           returnValue += SetFieldPropertyMapping(key, subkey)  + '\n';
      }
    }
    return returnValue;
  }
  

  var SetFieldPropertyMapping = function (key, subkey) {
    switch (data.model.properties[key][subkey]) {
      case "string":
        return getFieldProperty('te', key, 'EditValue');
      case "date":
        return getFieldProperty('de', key, 'EditValue');
      case "bool":
        return getFieldProperty('ce', key, 'EditValue');
      case "number":
        return getFieldProperty('ne', key, 'EditValue');
    }
  };
   var setFieldProperty = function (prefix, key, valueProperty) {
    return '.' + data.getNameFromKey(key) + ' = Me.' + prefix + data.getNameFromKey(key) + '.' + valueProperty + ',';
  }
  /////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////
  ///////////Returns the Setting Mappings for a property ///////////////
  //////////////////////////////////////////////////////////////////////
  //  Public Property Branch As BranchViewModel Implements IEditBranchView.Branch
  //  Get
  //   Return New BranchViewModel() With {
  //      .ID = Me.teID.EditValue,  
  //      .CustomerId = Me.neCustomerId.EditValue,  
  //      .Name = Me.teName.EditValue,  
  //      .Address1 = Me.teAddress1.EditValue,                 
  //  End Get
  /////////////////////////////////////////////////////
  var getViewModelPropertyGetFields = function () {
    var returnValue = "";
    for (var key in data.model.properties) {
      for (var subkey in data.model.properties[key]) {         
           returnValue += GetFieldPropertyMapping(key, subkey)  + '\n';
      }
    }
    // remove last commma and add closing curley braces
    returnValue = returnValue.replace(/,\s*$/, "") + '}';

    return returnValue;
  }
  
   var GetFieldPropertyMapping = function (key, subkey) {
    switch (data.model.properties[key][subkey]) {
      case "string":
        return setFieldProperty('te', key, 'EditValue');
      case "date":
        return setFieldProperty('de', key, 'EditValue');
      case "bool":
        return setFieldProperty('ce', key, 'EditValue');
      case "number":
        return setFieldProperty('ne', key, 'EditValue');
    }
  };
var getFieldProperty = function (prefix, key, valueProperty) {
    return ' Me.' + prefix + data.getNameFromKey(key) + '.' + valueProperty + '= Value.' + data.getNameFromKey(key);
  }
 /////////////////////////////////////////////////////








  //Add Edit Specific Functions 
  data.InstantiateControl = InstantiateControl;
  data.ControlFields = ControlFields;
  data.BeginInitLabel = BeginInitLabel;
  data.BeginInitEditor = BeginInitEditor;


  data.AddTolayoutControl = fieldsDesignerHelperHelper.AddTolayoutControl;
  data.GetLayoutControlItem = fieldsDesignerHelperHelper.GetLayoutControlItem;

  data.commaSeperatedLayoutControlList = commaSeperatedLayoutControlList;
  data.SetLayoutControl = SetLayoutControl;
  data.SetFieldPropertyMapping = SetFieldPropertyMapping;
  data.GetFieldPropertyMapping = GetFieldPropertyMapping;
  data.getViewModelPropertyFields = getViewModelPropertyFields;
  data.getViewModelPropertyGetFields = getViewModelPropertyGetFields;




  data.interfaceName = interfaceName;
  data.viewModelName = viewModelName;

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

  //UserControl - Resources File
  runner.fs.copyTpl(
    runner.templatePath('MVP/Edit/_iEditView.vb'),
    runner.destinationPath(featureFolderName + '/Edit/' + interfaceName + '.vb'), {
      data: data
    }
  );

}