
//------------------------------------//
// Home Controller
//------------------------------------//

define(function() {

  angular
    .module('coreModule')
    .registerController('homeController', ['$scope', function($scope) {
      $scope.title = "Home";
      $scope.heroMessage = [
        "P",
        "H",
        "I",
        "L",
        "M",
        "F",
        "E",
        "S",
        "T",
        "I",
        "V",
        "A",
        "L",
        "E",
        "N"
      ],
      $scope.sponsorTitle = "The sponsors",
      $scope.sponsorContent = "Without the sponsors none of this would be possible, thank you!",
      $scope.messageTitle = "Capture your imagination",
      $scope.messageSubTitle = "What is Philmfestivalen?",
      $scope.messageText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Dolor sit amet, consectetur...",
      $scope.ctaMessage = "join the competition"
    }]);

});
