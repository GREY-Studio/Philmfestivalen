
//------------------------------------//
// Theme Module
//------------------------------------//

define(function() {

  var themeModule = angular.module('themeModule', []);

  themeModule.run(['$log', function($log) {
    $log.info('Initialized the themeModule');
  }]);

});
