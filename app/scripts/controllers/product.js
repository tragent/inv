'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('ProductCtrl', ['$scope', '$location', function ($scope, $location){

  	// Array of products
    $scope.products = [{
                      id : 1,
                      name : "Dolait (big)",
                      unitPrice : "1000",
                      category : "diary product",
                      quantity : 39,
                      enable : true
                    },
                    {
                      id : 2,
                      name : "Coke (medium)",
                      unitPrice : "600",
                      category : "Drink",
                      quantity : 23,
                      enable : false
                    }];

    // redirect to edit page when row is clicked
    $scope.editProduct = function(productId){
      $location.path('/products/' + productId);
    };

    // Enable/disable user account
    $scope.enableProduct = function (enable){

      if (enable) {
        $scope.enable = "Enable";
        return "btn-primary";
      } else {
        $scope.enable = "Disable";
        return "btn-danger";
      }

    };

  }]);