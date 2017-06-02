(function () {

  'use strict';

   var app = angular.module('<%=data.appName%>', ['ui.router', 'ui.bootstrap', 'my-angular-components', 'auth0.lock', 'angular-jwt']);
   
    app.constant("apiBase", "http://localhost:7000/")

  var config = function (lockProvider, jwtOptionsProvider) {

    // Configuration for angular-jwt
    jwtOptionsProvider.config({
      tokenGetter: function () {
        return localStorage.getItem('id_token');
      }

    });

    lockProvider.init({
      clientID: 'UY5BHrujRwp7y1TZQl1Bif88aeeVRkrU',
      domain: 'volunteernow.auth0.com'
    });

  };


  config.$inject = ['lockProvider', 'jwtOptionsProvider'];

  app.config(config);
})();
