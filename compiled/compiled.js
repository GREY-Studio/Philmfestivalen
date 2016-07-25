
//------------------------------------//
// Controller References
//------------------------------------//

define(function() {

  return [
    'core/controllers/mainController'
  ]

});


//------------------------------------//
// About Controller
//------------------------------------//

define(function() {

  angular
    .module('coreModule')
    .registerController('aboutController', ['$scope', function($scope) {
      $scope.title = "About";
    }]);

});


//------------------------------------//
// Home Controller
//------------------------------------//

define(function() {

  angular
    .module('coreModule')
    .registerController('homeController', ['$scope', function($scope) {
      $scope.title = "Home";
    }]);

});


//------------------------------------//
// Main Controller
//------------------------------------//

define(function() {

  var coreModule = angular.module('coreModule');

  coreModule.controller('mainController', ['$scope', function($scope) {

  }]);

});


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
        angular.bootstrap( document, ['coreModule'] );
      });
  });

});


//------------------------------------//
// Log Runner
//------------------------------------//

define(function() {

  return ['$log', function($log) {
    $log.info('Started coreModule...');
  }];

});


define(['jquery', 'three'], function($, THREE) {

  var mouseX = 0,
      mouseY = 0,
      scene = new THREE.Scene(),
      renderer = new THREE.WebGLRenderer(),
      camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, .1, 1000),
      axis = new THREE.AxisHelper(30);

  camera.position.set( 0, 0, 400 );
  renderer.setPixelRatio( window.devicePixelRatio );
  scene.add(axis);

  var cubeGEO = new THREE.BoxGeometry(20,20,20),
      cubeMAT = new THREE.MeshBasicMaterial({color:0xdddddd, wireframe:true}),
      cube = new THREE.Mesh(cubeGEO, cubeMAT);

  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;

  scene.add(cube);

  $('.WebGL').append(renderer.domElement);

  function onDocumentMouseMove(e) {
		var windowHalfX = window.innerWidth / 2,
        windowHalfY = window.innerHeight / 2;

  	mouseX = ( event.clientX - windowHalfX ) / 2;
		mouseY = ( event.clientY - windowHalfY ) / 2;
	}

  function size(e) {
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
		requestAnimationFrame( animate );

		camera.position.x += ( mouseX - camera.position.x ) * .05;
		camera.position.y += ( -mouseY - camera.position.y ) * .05;
		camera.lookAt( scene.position );

		renderer.render( scene, camera );
	}

  size();
  animate();

  $(window).on('resize', size);
  $(document).on('mousemove', onDocumentMouseMove);
  
});


//------------------------------------//
// Require Config
//------------------------------------//

// Require.js paths and dependencies
require.config({

  paths: {

    // Paths to https CDN content - with static fallback in Bower
    'angular': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min', '/static/angular/angular.min'],
    'jquery': ['https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min', '/static/jquery/dist/jquery.min'],
    'angular-route': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-route.min', '/static/angular-route/angular-route.min'],
    'angular-animate': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-animate.min', '/static/angular-animate/angular-animate.min'],
    'preload': ['https://code.createjs.com/preloadjs-0.6.2.min', '/static/PreloadJS/lib/preloadjs-0.6.2.min'],
    'three': ['https://ajax.googleapis.com/ajax/libs/threejs/r76/three.min', '/static/three.js/build/three.min'],

    'threeConf': ['/components/javascripts/core/threeConf'],

    // Load the modules
    'coreModule': '/components/javascripts/core/coreModule',
    'themeModule': '/components/javascripts/theme/themeModule'

  },

  shim: {

    'angular': {
      'deps': [ 'jquery' ]
    },

    'angular-route': {
      'deps': [ 'angular' ]
    },

    'angular-animate': {
      'deps': [ 'angular' ]
    },

    'three': {
      'deps': [ 'jquery' ]
    },

    'themeModule': {
      'deps': [ 'angular-route' ]
    },

    'coreModule': {
      'deps': [ 'angular-route', 'angular-animate', 'themeModule', 'preload', 'three', 'threeConf' ]
    }

  }

});

// Require coreModule
require(['coreModule'], function() {
  // Application ready!
  // Serving document...
});


//------------------------------------//
// Theme Module
//------------------------------------//

define(function() {

  var themeModule = angular.module('themeModule', []);

  themeModule.run(['$log', function($log) {
    $log.info('Initialized the themeModule');
  }]);

});
