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
  .config(['$stateProvider','$urlRouterProvider','$httpProvider',function ($stateProvider,$urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post= {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
   // $httpProvider.defaults.headers['authorization'];
     // intercept for oauth tokens
  /*  $httpProvider.responseInterceptors.push([
        '$rootScope', '$q', '$injector','$location',
        function ($rootScope, $q, $injector, $location) {
            return function(promise) {
                return promise.then(function(response) {
                    return response; // no action, was successful
                }, function (response) {
                    // error - was it 401 or something else?
                    if (response.status===401 && response.data.error && response.data.error === "invalid_token") {
                        var deferred = $q.defer(); // defer until we can re-request a new token
                        // Get a new token... (cannot inject $http directly as will cause a circular ref)
                        $injector.get("$http").jsonp('/some/endpoint/that/reissues/tokens?cb=JSON_CALLBACK').then(function(loginResponse) {
                            if (loginResponse.data) {
                                $rootScope.oauth = loginResponse.data.oauth; // we have a new oauth token - set at $rootScope
                                // now let's retry the original request - transformRequest in .run() below will add the new OAuth token
                                $injector.get("$http")(response.config).then(function(response) {
                                    // we have a successful response - resolve it using deferred
                                    deferred.resolve(response);
                                },function(response) {
                                    deferred.reject(); // something went wrong
                                });
                            } else {
                                deferred.reject(); // login.json didn't give us data
                            }
                        }, function(response) {
                            deferred.reject(); // token retry failed, redirect so user can login again
                            $location.path('/user/sign/in');
                            return;
                        });
                        return deferred.promise; // return the deferred promise
                    }
                    return $q.reject(response); // not a recoverable error
                });
            };
        }];*/
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
       .state('sales', {
        url: '/sales',
        templateUrl:'views/sales.html',
        controller: ''
      });
  }])
  .run(function($rootScope, $location){
        $rootScope.location = $location;

        /*Nav bar controller*/
        $rootScope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });


