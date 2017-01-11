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
      .state('users',{
        url: '/users',
        templateUrl:'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .state('manageUser', {
        url: '/users/:id',
        templateUrl:'views/manageUser.html',
        controller: 'ManageUserCtrl'
      })
  }])
  .run(function($rootScope, $location){
        $rootScope.location = $location;

        /*Nav bar controller*/
        $rootScope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });


