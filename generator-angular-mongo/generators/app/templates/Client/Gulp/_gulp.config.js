module.exports = function () {

    var client = './src/client/';
    var port = 7265;
    var temp = './.tmp/';
    var server = './src/server/';
    var report = './report/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({
        devDependencies: true
    })['js'];

    var builtComponetsSource = './.tmp/scripts/';
    // var syncFusionFiles = clientFolderRoot + 'Components/**/*.html';

    //app module paths
    //var componetsSource = clientFolderRoot + 'Components/**/*.js';
    //var builtComponetsSource = temp + 'scripts/**/*.js';
    //var componetTemplates = clientFolderRoot + 'Components/**/*.html';

  
    var config = {

        //all js to vet
        report: report,
        build: './build/',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: client + './images/**/*.*',
        css: temp + 'styles.css',
        index: client + 'index.html',
        client: client,
        js: [
            client + '**/*.js',
            '!' + client + '**/*spec.js',
            '!**/*bard.js',
            '!**/bard.js',
            '!' + './bower_components/**'
        ],
        componentSourceFiles: './.tmp/scripts/**/*.js',
        html: client + "**/",
        less: client + 'styles/styles.less',
        server: server,
        temp: temp,
        browserReloadDelay: 3000,
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        port: port,
        nodeServer: server + 'app.js',

        //optimized files
        optimized: {
            app: "app.js",
            lib: "lib.js",
            examples: "examples.js",
        },

        //packages
        packages: [
            './package.json',
            './bower.json'

        ],
        root: '',

        htmltemplates: client + '**/*.html',
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app',
                standalone: false,
                root: 'app/'
            }

        },


        // Karma and Testsing
        serverIntegrationsSpecs: [client + '/tests/server-integrations/**'],
        specHelpers: [client + 'test-helpers/*.js']

    };

    config.getWiredepDefaultOptions = function () {
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath,
            "overrides": {
                "ace-builds": {
                    "main": [
                        "./bower_components/ace-builds/src-noconflict/ace.js",
                    ]
                }
            },
        };
    };



    config.karma = getKarmaOptions();

    return config;



    //////////////////////////////
    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                client
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [{
                    type: 'html',
                    subdir: 'report-html'
                }, {
                    type: 'lcov',
                    subdir: 'report-lcov'
                }, {
                    type: 'text-summary'
                }]
            },
            preprocessors: {}
        };
        //options.preprocessors[client + '**/!(*.spec)*(.js)'] = ['coverage'];
        return options;
    }

};

