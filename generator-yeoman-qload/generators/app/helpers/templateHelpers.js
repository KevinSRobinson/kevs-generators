const _ = require('lodash');
_.mixin(require("lodash-inflection"));
var sprintf = require("sprintf-js").sprintf;
var format = require('string-format')

module.exports.helpers = function (featureName, dataName) {

   let _srcInterfaceFileName = "I" +  featureName + "View.vb";

   let _srcUserControlName = 'uc' + featureName + 'View'; 
   let _srcUserControlDesignerFileName = '/UserControl/' + _srcUserControlName + '.Designer.vb';
   let _srcUserControlCodeBehindFileName = '/UserControl/uc'  + featureName + 'View.vb';




   //user control
   let userControlName = 'uc' + dataName + 's' + featureName + 'View';
   let userControlCodeBehindFileName = userControlName + '.vb';

   //designer
   let userControlDesignerFileName = userControlName + '.Deisgner.vb';
   

   let featureFolderName = "/" +_.pluralize(dataName) + "/" + featureName + "/";
   let interfaceName = "I" + dataName + featureName + "View";
   let interfaceFileName = interfaceName + ".vb";

     


   return {
      srcInterfaceFileName : _srcInterfaceFileName,   
      srcUserControlCodeBehindFileName: _srcUserControlCodeBehindFileName,
 
      srcUserControlDesignerFileName: _srcUserControlDesignerFileName,



      interfaceName : interfaceName,        
      interfaceFileName : interfaceFileName,
      featureFolderName: featureFolderName,

      //user control
      userControlCodeBehindFileName: userControlCodeBehindFileName,
      userControlName: userControlName,
      userControlDesignerFileName: userControlDesignerFileName
   };
};