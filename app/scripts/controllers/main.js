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
            $scope.username, $scope.password,
            function(response){
                $location.path('/about');
            },
            function(response){
                alert('Something went wrong with the login process. Try again later!');
            }
        );
    }

    $scope.email = '';
    $scope.password = '';

    if(AuthenticationService.checkLog()){
        $location.path('/about');
    }
  }]);
