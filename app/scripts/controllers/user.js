'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('UserCtrl', ['$http','$scope', '$location','UserService', '$window', function ($http, $scope, $location, UserService, $window){

      UserService.getAllUsers(

        // Got all users
        function(response){
          $scope.users = response.data;
        }
      );

    // redirect to edit page when row is clicked
    $scope.editUser = function(userId) {
      $location.path('/users/' + userId);
    };

    // Set color and content of button for an enable/disable user account
    $scope.isActive = function (enable) {

      if (enable) {
        $scope.enable = "Enabled";
        return "btn-primary";
      } else {
        $scope.enable = "Disabled";
        return "btn-danger";
      }

    };

    //Update activation of a user's account
    $scope.activateUser = function(userId) {

        $window.alert("Are you sure you want to de-activate user's account");

        UserService.De_ActivateAccount( userId,
        // Got all users
        function(response){
          $location.path('/users');
        }
      );
     }; 
   }]);
