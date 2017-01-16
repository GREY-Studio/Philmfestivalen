
//------------------------------------//
// Event Controller
//------------------------------------//

define(function() {

  angular
    .module('coreModule')
    .registerController('eventController', ['$scope', function($scope) {
      $scope.title = "Event";
    }]);

});
