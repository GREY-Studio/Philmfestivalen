
//------------------------------------//
// Compete Controller
//------------------------------------//

define(function() {

  angular
    .module('coreModule')
    .registerController('competeController', ['$scope', function($scope) {
      $scope.title = "Compete";
    }]);

});
