
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
