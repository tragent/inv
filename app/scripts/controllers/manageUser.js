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
        $scope.action = "Update";

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
      $scope.action = "Submit";
  	}

  }]);
