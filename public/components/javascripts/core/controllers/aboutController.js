
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
