var app = angular.module("myApp", []);

app.controller("MainController", function($scope) {
  $scope.userInfo = {
    name: 'Huy',
    number: '101'
  }
  $scope.showOncall = false;
  $scope.showDialpad = false;

});