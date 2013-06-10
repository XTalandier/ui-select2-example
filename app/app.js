'use strict';

var exampleModule = angular.module ('example', ['ui.select2']);

exampleModule.controller('Example1Ctrl', function($scope){
  $scope.change = function(){
    console.log('My value is: ' , $scope.example1);
  }
});

