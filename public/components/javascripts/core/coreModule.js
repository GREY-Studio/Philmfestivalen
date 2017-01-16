
//------------------------------------//
// Core Module
//------------------------------------//

define(['core/runners/logRunner'], function(logRunner) {

  var coreModule = angular.module('coreModule', ['ngRoute', 'ngAnimate', 'themeModule']);

  coreModule.run(logRunner);

  coreModule.config(['$controllerProvider', function($controllerProvider) {
    coreModule.registerController = $controllerProvider.register;
  }]);

  //Angular routing
  coreModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

    $routeProvider
      //Home
      .when('/', {
        controller: 'homeController',
        templateUrl: 'components/javascripts/core/views/home.html',
        controllerAs: 'vm',
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
      //Compete
      .when('/compete', {
        controller: 'competeController',
        templateUrl: 'components/javascripts/core/views/compete.html',
        controllerAs: 'vm',
        resolve: {
          load: ['$q', function($q) {
            var deferred = $q.defer();

            require(['core/controllers/competeController'], function() {
              deferred.resolve();
            });

            return deferred.promise;
          }]
        }
      })
      //Program
      .when('/program', {
        controller: 'programController',
        templateUrl: 'components/javascripts/core/views/program.html',
        controllerAs: 'vm',
        resolve: {
          load: ['$q', function($q) {
            var deferred = $q.defer();

            require(['core/controllers/programController'], function() {
              deferred.resolve();
            });

            return deferred.promise;
          }]
        }
      })
      //Event
      .when('/event', {
        controller: 'eventController',
        templateUrl: 'components/javascripts/core/views/event.html',
        controllerAs: 'vm',
        resolve: {
          load: ['$q', function($q) {
            var deferred = $q.defer();

            require(['core/controllers/eventController'], function() {
              deferred.resolve();
            });

            return deferred.promise;
          }]
        }
      })
      //Event
      .when('/about', {
        controller: 'aboutController',
        templateUrl: 'components/javascripts/core/views/about.html',
        controllerAs: 'vm',
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
      //Auth User Management
      //Register
      .when('/register', {
        controller: 'registerController',
        templateUrl: 'components/javascripts/core/views/register.html',
        controllerAs: 'vm',
        resolve: {
          load: ['$q', function($q) {
            var deferred = $q.defer();

            require(['core/controllers/registerController'], function() {
              deferred.resolve();
            });

            return deferred.promise;
          }]
        }
      })
      //Otherwise Set URL to "/"
      .otherwise({
        redirectTo: '/'
      });

  }]);

  //Bootstrap the application to the document (inititate)
  require(['core/controllerReferences'], function(references) {
      require(references, function() {
        angular.bootstrap( document, ['coreModule'] );
      });
  });

});
