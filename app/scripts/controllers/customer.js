'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:CustomerCtrl
 * @description
 * # CustomerCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
  .controller('CustomerCtrl', ['$scope', '$location', function ($scope, $location){

  	// Array of users
    $scope.customers = [{
                      id : 1,
                      firstName : "Nkep",
                      lastName : "Kerlyn",
                      email : "nkepkerlyn@gmail.com",
                      telephone : "(+237) 671 514 344"
                    },
                    {
                      firstName : "Kengne",
                      lastName : "Grace",
                      email : "graceruphine@gmail.com",
                      telephone : "(+237) 675 734 571",
                    }];

    // redirect to edit page when row is clicked
    $scope.editCustomer = function(customerId){
      $location.path('/customers/' + customerId);
    };

  }]);