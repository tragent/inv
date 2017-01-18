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
     $scope.login = false;
    // this.user;
     this.login = function() {
        console.log("Logging in");
        AuthenticationService.login(
        $scope.username,
        $scope.password,
            function(response){
                $scope.login = true;
               // $scope.user = response.data;
                console.log(response.data);
              //  alert($scope.user.username);
                $location.path('/users');
                alert($scope.user.username);

            },
            function(response){
                alert('Something went wrong with the login process. Try again later!');
            }
        );
    }
   // console.log($scope.user);

    if(AuthenticationService.checkLog()){
        $location.path('/sales');
        console.log("hihe");
    }

    $scope.logout = function(){
        AuthenticationService.logout();
        $location.path('/login');
        console.log("logout");
    }

//$http.defaults.headers.common = ['Bearer' + AuthenticationService.getCurrentToken()];

  }]);
