'use strict';

/**
 * @ngdoc overview
 * @name minventoryApp
 * @description
 * # minventoryApp
 *
 * Main module of the application.
 */
angular
  .module('minventoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
       .state('login',{
        url: '/login',
        templateUrl:'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about',{
        url: '/about',
        templateUrl:'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
  }])
  .run(function($rootScope, $location){
        $rootScope.location = $location;
  });


