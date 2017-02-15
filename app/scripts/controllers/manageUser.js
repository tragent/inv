'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:ManageUserCtrl
 * @description
 * # ManageUserCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('ManageUserCtrl', ['$scope', '$stateParams', 'UserService', 'RoleService', '$location', '$window', function ($scope, $stateParams, UserService, RoleService, $location, $window){

    //Default params
    $scope.submitted = false; 

    // Get all roles in the system
      RoleService.getAllRoles(

        // Got all roles
        function(response){
          $scope.roles = response.data;
        }
      );

  	//check if state parameter is set
  	if ($stateParams.id) {

      // Get user's information
      UserService.getUserById( $stateParams.id,

        // Got all users
        function(response){
          $scope.user = response.data;
          $scope.currentUserAccount = $scope.user.username;
          $scope.action = "Update";
          console.log($scope.user);
        }
      );

  	} else {
  		// Display empty input fields
  		$scope.user = {
              id : 1,
              firstName : "",
              lastName : "",
              username : "",
              email : "",
              telephone : "",
              role : ""
            };
      // Display values for a new user
      $scope.action = "Submit";
      $scope.currentUserAccount  = "New user";
  	}

    // Update or create a user on submit form
    $scope.manageUserAccount = function() {

      $scope.submitted = true;
      if ($scope.userForm.$valid) {

        console.log($scope.user);
        if ($stateParams.id) {

          // Update user's information
          UserService.updateUserAccount( $scope.user,

          // Updated user's information
          function(){
            $location.path('/users');
          },

          // Fail to update user's account
          function() {
            $window.alert("We have a server error.. Please try again letter");
          }
        );
        } else {
            
          $scope.user.id='';
          // Create user's account
          UserService.createUser( $scope.user,
            // Created user's account
            function(){
              $location.path('/users');
            },

            // Fail to create user's account
            function() {
              $window.alert("We have a server error.. Please try again letter");
            }
          );
        }

      } else {
        $window.alert("user form is invalid");
      }
          
    };

  }]);
