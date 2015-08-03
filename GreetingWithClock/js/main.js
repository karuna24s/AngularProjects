var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
  $scope.person = { name: "Karuna" };
  var updateClock = function() {
    $scope.clock = new Date();
  };
  var timer = setInterval(function() {
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
});