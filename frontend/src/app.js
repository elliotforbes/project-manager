var app = angular.module('project-manager', ['ngRoute']);

app.controller('AppController', ['$scope', function($scope) {
  $scope.hello = "Hello";
}]);
