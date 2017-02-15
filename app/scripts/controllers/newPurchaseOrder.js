'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:PurchaseCtrl
 * @description
 * # PurchaseCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('PurchaseCtrl', ['$scope', function ($scope){

    //Default params
    $scope.submitted = false;

    //Process new transaction
    $scope.newPurchase = function(){

    	$scope.submitted = true;
    	if ($scope.purchaseForm.$valid) {
    		console.log("transaction successful");
    	} else {
    		console.log("transaction unsuccessful");	
    	}

    };

    // Clear form
    $scope.clear = function(){
    	$scope.purchase.supplier = "";
    	$scope.purchase.product = "";
    	$scope.purchase.quantity = "";
    };
}]);