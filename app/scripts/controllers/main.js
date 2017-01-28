'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('MainCtrl', ['$rootScope','$scope', '$http','$location', 'AuthenticationService', function ($rootScope, $scope, $http, $location, AuthenticationService){
    
    /* Declear default variables (if logged in and if form is submitted) */
    $scope.loggedIn = false;
    $scope.submitted = false;
    
    /* On submit login form */
    this.login = function() {

      $scope.submitted = true;

      if ( $scope.username && $scope.password ) {

        AuthenticationService.login(

          $scope.username,
          $scope.password,

          /* Successful login */
          function(response) {

            $scope.loggedIn = true;
            $rootScope.user = response.data;
            console.log(response.data);
            $location.path('/users');
          },

          /* Unsuccessful login */
          function(response) {
            $scope.loggedIn = false;
            $scope.errorMessage = "Invalid userame or password";
          }

        );

      }
    };

    if(AuthenticationService.checkLog()){
        $location.path('/users');
    }

    $scope.logout = function(){
        AuthenticationService.logout();
        $location.path('/login');
    };

    $scope.user = function(){
      AuthenticationService.getCurrentUser();
      console.log(AuthenticationService.getCurrentUser());
    }
  }]);