'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:ManageUserCtrl
 * @description
 * # ManageUserCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('ManageUserCtrl', ['$scope', '$stateParams', function ($scope, $stateParams){

    //Default params
    $scope.submitted = false;

  	//check if state parameter is set
  	if ($stateParams.id) {

  		//Display clients data
  		$scope.user = {
              id : 1,
              firstName : "Nkep",
              lastName : "Kerlyn",
              username : "Kerlyn",
              email : "nkepkerlyn@gmail.com",
              telephone : "(+237) 671 514 344",
              role : "Sales agent"
            };

        // Display value for an exist user
        $scope.action = "Update";
        $scope.currentUserAccount = $scope.user.username;

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
    $scope.manageUserAccount = function(){
      $scope.submitted = true;
      if ($scope.userForm.$valid) {
        console.log("user form is valid " + $scope.user.role);
      } else {
        console.log("user form is invalid");
      }
          
    };

  }]);
