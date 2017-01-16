
//------------------------------------//
// Program Controller
//------------------------------------//

define(function() {

  angular
    .module('coreModule')
    .registerController('programController', ['$scope', function($scope) {
      $scope.title = "Program";
    }]);

});
