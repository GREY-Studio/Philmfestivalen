
//------------------------------------//
// Main Controller
//------------------------------------//

define(function() {

  var coreModule = angular.module('coreModule');

  coreModule.controller('mainController', ['$scope', function($scope) {

    //Navigation
    $scope.item = [
      //{ name: 'Compete', href: '/compete', active: true },
      //{ name: 'Program', href: '/program', active: true },
      { name: 'Event', href: '/event', active: true },
      { name: 'About', href: '/about', active: true },
      { name: 'Sign in', href: '#', active: false }
    ];

    $scope.date = "Mar 06 - 09th 2016";
    $scope.loca = "Luleå tekniska universitet";

  }]);

});
