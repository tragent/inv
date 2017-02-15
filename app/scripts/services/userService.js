'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:UserService
 * @description
 * # UserService
 * Service of the minventoryApp
 */
angular.module('minventoryApp')
	.factory('UserService', ['$http', 'AuthenticationService', function($http, AuthenticationService) {

		//base url
		var BASE_NAME = 'http://localhost:8080/api/v1/users';

		// configuration
		var config = {headers:  {
		        'Content-Type': 'application/json',
		        'Authorization': AuthenticationService.getCurrentToken()
		    }
		};

		return {
			// Create a new user
			createUser : function (user, onSuccess, onError) {
				$http.post(BASE_NAME, user, config).then(
					function(response) {   
		            	// Created user account
		            	onSuccess(response);

		            } , function(response) {
		            	// Fail to create user account
		            	onError(response);
		        	}
				);
			},

			// Get user by user's id
			getUserById : function (userId, onSuccess, onError) {
	        	$http.get(BASE_NAME +'/'+ userId, config).then(
	        		function(response) {   
		            	// Got user's information
		            	onSuccess(response);

		            } , function(response) {
		            	// Fail to get user's information
		            	onError(response);

		        	}
		        );
	       	},

			// Get user by username
			getUserByUsername : function (username, onSuccess, onError){
	        	$http.get(BASE_NAME +'/?'+ username, config).then(
	            	function(response) {   
		            	// Got user's information
		            	onSuccess(response);

		            } , function(response) {
		            	// Fail to get user's information
		            	onError(response);

		        	}
	            );
	        },

	        // Get all users in the system
	        getAllUsers : function (onSuccess, onError){
	        	$http.get(BASE_NAME, config).then(
	        		function(response) {   
		            	// Got user's information
		            	onSuccess(response);

		            } , function(response) {
		            	// Fail to get user's information
		            	onError(response);
		        	}
		        );
	       	},

	       	// Update user's account
			updateUserAccount : function (user, onSuccess, onError) {
				$http.put(BASE_NAME + '/' + user.id, user, config).then(
					function(response) {   
		            	// Update user's information
		            	onSuccess(response);

		            } , function(response) {
		            	// Fail to update user's information
		            	onError(response);
		        	}
				);
			},

			// De-activate user's account
			De_ActivateAccount : function (userId, onSuccess, onError) {
				$http.delete(BASE_NAME + '/' + userId, config).then(
					function(response) {   
		            	// Update user's information
		            	onSuccess(response);

		            } , function(response) {
		            	// Fail to update user's information
		            	onError(response);
		        	}
				);
			},
	    };

	}]);