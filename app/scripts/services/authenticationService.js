'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minventoryApp
 */
angular.module('minventoryApp')
	.factory('AuthenticationService', ['$http', 'localStorageService', function($http, localStorageService) {
		
		/* Function to verify if user is logged in*/
		
		function checkLog() {
			if(localStorageService.get('token')){
            	return true;
            }
        	else{
            	return false;
            }
        }

        /* Function to login*/
        function login(username, password, onSuccess, onError){
	        $http.post('', // api here 
	        {
	            username: username,
	            password: password
	        }).
	        then(function(response) {

	            localStorageService.set('token', response.data.token);
	            onSuccess(response);

	        }, function(response) {

	            onError(response);

	        });
    	}

    	/* Function to logout*/
    	function logout(){
        	localStorageService.remove('token');
    	}

    	/* Function to get current token*/
    	function getCurrentToken(){
        	return localStorageService.get('token');
    	}

    	return {
        	checkLog: checkLog,
        	login: login,
        	logout: logout,
        	getCurrentToken: getCurrentToken
    	}
	}]);