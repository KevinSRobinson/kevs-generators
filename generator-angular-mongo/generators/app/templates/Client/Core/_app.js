(function () {

  'use strict';

  var app = angular.module('<%=data.appName%>', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'my-angular-components', 'auth0.lock', 'angular-jwt']);

  app.constant('apiBase', 'http://localhost:7266/api');

  var config = function (lockProvider, jwtOptionsProvider) {

    // Configuration for angular-jwt
    jwtOptionsProvider.config({
      tokenGetter: function () {
        return localStorage.getItem('id_token');
      }

    });

    lockProvider.init({
      clientID: 'Mt36cExkDIsVqQXjquyQWsIKKEMLE4KJ',
      domain: 'app72812756.auth0.com'
    });

  };


  config.$inject = ['lockProvider', 'jwtOptionsProvider'];

  app.config(config);
})();
