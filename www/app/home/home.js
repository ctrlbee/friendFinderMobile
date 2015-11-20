angular.module('app.home', [])

.controller('HomeController', ['$scope', '$location', function ($scope, $location) {
  $scope.fbLogin = function (){
    $location.path('/facebook');
  }
}]);
