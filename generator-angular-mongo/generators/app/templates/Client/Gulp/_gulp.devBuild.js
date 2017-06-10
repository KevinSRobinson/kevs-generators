	
	
var utils = require('./gulp.Utils');
var config = require('../gulp.config')();
var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    lazy: true
});


var inject = function(){
    utils.log('inject starting');
    utils.log(config.js);
    return gulp
            //use index.html as source
            .src(config.index)

            //Debug
            .pipe($.debug({title: 'Inject Debug:'}))

            //inject css files
            .pipe($.inject(gulp.src(config.css)))

              //inject js files
            .pipe($.inject(gulp.src(config.js)))

            //save in temp
            .pipe(gulp.dest(config.src));
};

var wiredep = function () {

    var options = {
        bowerJson: require('../bower.json')
    };

    return gulp

            .src(config.index)

			//Wiredep
			.pipe($.debug({title: 'Wiredep Debug:'}))

            // init wiredep
            .pipe(wiredep(options))
            
            //save in temp
            .pipe(gulp.dest(config.src));
}

module.exports.wiredep = wiredep;
module.exports.inject = inject;
		
		
	
		
