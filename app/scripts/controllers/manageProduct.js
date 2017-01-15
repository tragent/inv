'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:ManageProductsCtrl
 * @description
 * # ManageProductsCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('ManageProductsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams){

    //Default params
    $scope.submitted = false;

  	//check if state parameter is set
  	if ($stateParams.id) {

  		//Display clients data
  		$scope.product = {
              id : 2,
              name : "Coke (medium)",
              unitPrice : 600,
              category : "Drink",
              quantity : 23,
              enable : false
            };

        // Display value for an exist product
        $scope.action = "Update";
        $scope.currentProduct = $scope.product.name;

  	} else {
  		// Display empty input fields
  		$scope.product = {
              id : 1,
              name : "",
              unitPrice : "",
              category : "",
              quantity : "",
              enable : ""
            };
      // Display values for a new product
      $scope.action = "Create";
      $scope.currentProduct  = "New product";
  	}

     // Update or create a product on submit form
    $scope.manageProduct = function(){
      $scope.submitted = true;
      if ($scope.productForm.$valid) {
        console.log("user form is valid " + $scope.product.name);
      } else {
        console.log("user form is invalid");
      }
          
    };

  }]);
