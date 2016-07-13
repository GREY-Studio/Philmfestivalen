
//------------------------------------//
// Core Module
//------------------------------------//

define(['core/runners/logRunner'], function(logRunner) {

  var coreModule = angular.module('coreModule', ['ngRoute', 'ngAnimate', 'themeModule']);

  coreModule.run(logRunner);

  coreModule.config(['$controllerProvider', function($controllerProvider) {
    coreModule.registerController = $controllerProvider.register;
  }]);

  // Angular routing
  coreModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

    $routeProvider
      //Default (Empty)
      .when('/', {
        controller: 'homeController',
        templateUrl: 'components/javascripts/core/views/home.html',
        resolve: {
          load: ['$q', function($q) {
            var deferred = $q.defer();

            require(['core/controllers/homeController'], function() {
              deferred.resolve();
            });

            return deferred.promise;
          }]
        }
      })
      //Home
      .when('/home', {
        controller: 'homeController',
        templateUrl: 'components/javascripts/core/views/home.html',
        resolve: {
          load: ['$q', function($q) {
            var deferred = $q.defer();

            require(['core/controllers/homeController'], function() {
              deferred.resolve();
            });

            return deferred.promise;
          }]
        }
      })
      //About
      .when('/about', {
        controller: 'aboutController',
        templateUrl: 'components/javascripts/core/views/about.html',
        resolve: {
          load: ['$q', function($q) {
            var deferred = $q.defer();

            require(['core/controllers/aboutController'], function() {
              deferred.resolve();
            });

            return deferred.promise;
          }]
        }
      })
      //404 Note: Make a 404 page || reset URL
      .otherwise({
        redirectTo: '/'
      });

  }]);

  // Bootstrap the application to the document (inititate)
  require(['core/controllerReferences'], function(references) {
      require(references, function() {
        angular.bootstrap(document, ['coreModule']);
      });
  });

});
