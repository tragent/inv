'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:ManageSupplierCtrl
 * @description
 * # ManageSupplierCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('ManageSupplierCtrl', ['$scope', '$stateParams', function ($scope, $stateParams){

  	//Default params
    $scope.submitted = false;

    //check if state parameter is set
  	if ($stateParams.id) {

  		//Display clients data
  		$scope.supplier = {
              id : 1,
              name : "Nkep Kerlyn",
              email : "nkepkerlyn@gmail.com",
              telephone : "(+237) 671 514 344"
            };

        // Display value for an exist supplier
        $scope.action = "Update";
        $scope.supplier.name = $scope.supplier.name;
        $scope.currentSupplierAccount = $scope.supplier.name;

  	} else {
  		// Display empty input fields
  		$scope.supplier = {
              id : 1,
              name : "",
              email : "",
              telephone : ""
            };
      // Display values for a new supplier
      $scope.action = "Create";
      $scope.currentSupplierAccount  = "New supplier";
  	}

    // Update or create a supplier on submit form
    $scope.manageSupplierAccount = function(){
      $scope.submitted = true;
      if ($scope.supplierForm.$valid) {
        console.log("user form is valid " + $scope.supplier.name);
      } else {
        console.log("user form is invalid");
      }
          
    };
  }]);