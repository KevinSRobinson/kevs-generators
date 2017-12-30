const chalk = require('chalk');
const settings = require('../settings');


// var copyTpl = function (runner, source, destinationPath, settings) {
//   try {
//     runner.fs.copyTpl(runner.templatePath(source), runner.destinationPath(destinationPath), {
//       settings: settings
//     });
//   } catch (err) {
//     console.log(chalk.red(err));
//   }
// };





// var copyTpls = function (runner, source, dest, files) {
//   console.log('dest = '  +  chalk.bgYellow(dest));

//   console.log(chalk.yellow(source));

//   for (var file in files) {
//     try {


//     // / let sourcePath = source + '_' + files[file];
//     //  let destPath = dest + files[file];

//       //log(files[file]);
//       //log(sourcePath);

//       console.log('destPath = '  +  chalk.bgYellow(destPath));

//       runner.fs.copyTpl(runner.templatePath( sourcePath ), runner.destinationPath(destPath), {
//         data: settings
//       });



//     } catch (err) {
//       console.log(chalk.red(err));
//       //console.log(chalk.green(files(file)));
//     }
//   }
// };


var fs = require('fs');


var copyTplsWithData = function (runner, source, dest, data) {
  console.log('dest = '  +  chalk.bgYellow(dest));

  console.log(chalk.yellow(source));

  if (source != undefined)
  {
    var files1 = fs.readdirSync('./generators/feature/templates/' + source + "/");

    for (var file in files1) {
      try {
  
  
        let sourcePath = source + files1[file];
        let destPath = dest + files1[file];
  
  
        //generator-angular-mongo\generators\feature\templates\Client\Components\Details
        //log(files[file]);
        //log(sourcePath);
        
  
         console.log('sourcePath = '  +  chalk.yellow(source));
         console.log('files = '  +  chalk.blue(files1));
  
  
  
        runner.fs.copyTpl(runner.templatePath( sourcePath ), runner.destinationPath(destPath), {
          data: data
        });
  
  
  
      } catch (err) {
        console.log(chalk.red(err));
        //console.log(chalk.green(files(file)));
      }
    }
  }

 
};


module.exports.copyTplsWithData = copyTplsWithData;
// module.exports.copyTpls = copyTpls;
// module.exports.copyTpl = copyTpl;
