'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('MainCtrl', ['$scope', '$http','$location', 'AuthenticationService', function ($scope, $http, $location, AuthenticationService){
     $scope.login = function() {
        AuthenticationService.login(
            $scope.username,
            $scope.password,
            function(response){
                $location.path('/users');
                console.log("success");
            },
            function(response){
                alert('Something went wrong with the login process. Try again later!');
            }
        );
    }

    if(AuthenticationService.checkLog()){
        $location.path('/sales');
        console.log("hihe");
    }

    $scope.logout = function(){
        AuthenticationService.logout();
        $location.path('/login');
        console.log("logout");
    }
  }]);
