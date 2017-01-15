'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:ManageCustomerCtrl
 * @description
 * # ManageCustomerCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('ManageCustomerCtrl', ['$scope', '$stateParams', function ($scope, $stateParams){

    //Default params
    $scope.submitted = false;

  	//check if state parameter is set
  	if ($stateParams.id) {
  		//Display clients data
  		$scope.customer = {
              id : 1,
              firstName : "Nkep",
              lastName : "Kerlyn",
              email : "nkepkerlyn@gmail.com",
              telephone : "(+237) 671 514 344"
            };

        // Display value for an exist customer
        $scope.action = "Update";
        $scope.currentCustomerAccount = $scope.customer.firstName + " " +$scope.customer.lastName;

  	} else {
  		// Display empty input fields
  		$scope.customer = {
              id : 1,
              firstName : "",
              lastName : "",
              email : "",
              telephone : ""
            };
      // Display values for a new customer
      $scope.action = "Create";
      $scope.currentCustomerAccount  = "New customer";
  	}

    // Update or create a customer on submit form
    $scope.manageCustomerAccount = function(){
      $scope.submitted = true;
      if ($scope.customerForm.$valid) {
        console.log("user form is valid " + $scope.customer.firstName);
      } else {
        console.log("user form is invalid");
      }
          
    };
  }]);