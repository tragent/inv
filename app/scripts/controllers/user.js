'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('UserCtrl', ['$scope', '$location', function ($scope, $location){
    
    // Array of users
    $scope.users = [{
                      id : 1,
                      firstName : "Nkep",
                      lastName : "Kerlyn",
                      username : "Kerlyn",
                      email : "nkepkerlyn@gmail.com",
                      telephone : "(+237) 671 514 344",
                      role : "Sales agent",
                      enable : true
                    },
                    {
                      id : 2,
                      firstName : "Kengne",
                      lastName : "Grace",
                      username : "Grace",
                      email : "graceruphine@gmail.com",
                      telephone : "(+237) 675 734 571",
                      role : "Manager",
                      enable : false
                    }];

    // redirect to edit page when row is clicked
    $scope.editUser = function(userId){
      $location.path('/users/' + userId);
    };

    // Set color and content of button for an enable/disable user account
    $scope.isActive = function (enable){

      if (enable) {
        $scope.enable = "Enable";
        return "btn-primary";
      } else {
        $scope.enable = "Disable";
        return "btn-danger";
      }

    };

    //Update activation of a user's account
    $scope.activateUser = function(enable){

      // code to update user's 

    };

  }]);
