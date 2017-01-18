'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:PurchaseTransactionsCtrl
 * @description
 * # PurchaseTransactionsCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('PurchaseTransactionsCtrl', ['$scope', '$location', function ($scope, $location){

  	// Array of transactions
    $scope.transactions = [{
                      number : 	"TRN00123235",
                      supplier : "Dolait Cameroun - Douala",
                      product : "Dolait (big)",
                      quantity : 38,
                      date : "01-10-2016 13:15:14",
                      status : "Done"
                    },
                    {
                      number : "TRN000123222",
                      supplier : "CHOCOCAM Douala",
                      product : "Chocolate bar",
                      quantity : "50",
                      date : "30-09-2016 14:42:10",
                      status : "Pending"
                    }];

    // redirect to edit page when row is clicked
    $scope.viewProduct = function(transaction_number){
    	console.log("redirect to diff page");
      $location.path('/transactions/' + transaction_number);
    };

  }]);