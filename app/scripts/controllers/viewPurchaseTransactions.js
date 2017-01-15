'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:ViewPurchaseTransactionsCtrl
 * @description
 * # ViewPurchaseTransactionsCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('ViewPurchaseTransactionsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams){

  	//Display clients data
  	$scope.transaction = {
              number :  "TRN00123235",
              supplier : "Dolait Cameroun - Douala",
              product : "Dolait (big)",
              quantity : 38,
              date : new Date("01-10-2016"),
              status : "Done"
            };
  }]);