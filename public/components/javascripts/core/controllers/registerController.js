define(function() {

  angular
    .module('coreModule')
    .registerController('registerController', ['$scope', function($scope) {
      $scope.title = "Register";
      var vm = this;

      vm.credentials = {
        name : "",
        email : "",
        password : ""
      };

      vm.onSubmit = function () {
        console.log('Submitting registration');
        console.log(vm.credentials);
        authentication.register(vm.credentials)
          .error(function(err){
            alert(err);
          });/*
          .then(function(){
            $location.path('profile');
          });*/
      };
    }]);

});
