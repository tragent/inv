'use strict';

/**
 * @ngdoc function
 * @name minventoryApp.controller:RoleService
 * @description
 * # RoleService
 * Service of the minventoryApp
 */
angular.module('minventoryApp')
  .factory('RoleService', ['$http', 'AuthenticationService', function($http, AuthenticationService) {

    //base url
    var BASE_NAME = 'http://localhost:8080/api/v1/roles';

    // configuration
    var config = {headers:  {
            'Content-Type': 'application/json',
            'Authorization': AuthenticationService.getCurrentToken()
        }
    };

    return {
      // Create a new role
      createRole : function (role, onSuccess, onError) {
        $http.post(BASE_NAME, role, config).then(
          function(response) {   
                  // Got role's information
                  onSuccess(response);

                } , function(response) {
                  // Fail to get role's information
                  onError(response);
              }
        );
      },

      // Get role by role's id
      getRoleById : function (id, onSuccess, onError) {
            $http.get(BASE_NAME +'/'+ id, config).then(
              function(response) {   
                  // Got role's information
                  onSuccess(response);

                } , function(response) {
                  // Fail to get role's information
                  onError(response);

              }
            );
          },

      // Get role by name
      getUserByName : function (name, onSuccess, onError){
            $http.get(BASE_NAME +'/?'+ name, config).then(
                function(response) {   
                        // Got role
                        onSuccess(response);

                    } , function(response) {
                        // Fail to get role
                        onError(response);

                }
            );
          },

          // Get all roles in the system
          getAllRoles : function (onSuccess, onError){
            $http.get(BASE_NAME, config).then(
              function(response) {   
                  // Got role's information
                  onSuccess(response);

                } , function(response) {
                  // Fail to get role's information
                  onError(response);
              }
            );
          }
      };

  }]);