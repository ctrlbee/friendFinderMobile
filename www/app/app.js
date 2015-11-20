angular.module('app', [
  'ionic',
  'app.facebook',
  'app.home',
  'app.map',
  'app.maker',
  'app.services',
  'ngRoute',
  'ui.router',
  'ngMap'
])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $httpProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    })
    .state('facebook', {
      url: '/facebook',
      templateUrl: 'app/facebook/facebook.html',
      controller: 'FacebookController'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'app/map/map.html',
      controller: 'MapController'
    })
    .state('mapMaker', {
      url: '/mapMaker',
      templateUrl: 'app/mapMaker/mapMaker.html',
      controller: 'MapMakerController'
    })
    .state('logout', {
      url: '/logout',
      redirectTo: '/home'
    });
});
