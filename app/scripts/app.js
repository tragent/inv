'use strict';

/**
 * @ngdoc overview
 * @name minventoryApp
 * @description
 * # minventoryApp
 *
 * Main module of the application.
 */
angular
  .module('minventoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider', '$httpProvider', function ($stateProvider,$urlRouterProvider,$httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.get = {};
    $httpProvider.defaults.headers.patch = {};
    $urlRouterProvider.otherwise('/login');
    $stateProvider
       .state('login',{
        url: '/login',
        templateUrl:'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('users',{
        url: '/users',
        templateUrl:'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .state('manageUser', {
        url: '/users/:id',
        templateUrl:'views/manageUser.html',
        controller: 'ManageUserCtrl'
      })
       .state('sales', {
        url: '/sales',
        templateUrl:'views/sales.html',
        controller: ''
      })
      .state('customers', {
        url: '/customers',
        templateUrl:'views/customer.html',
        controller: 'CustomerCtrl'
      })
      .state('manageCustomers', {
        url: '/customers/:id',
        templateUrl:'views/manageCustomer.html',
        controller: 'ManageCustomerCtrl'
      })
      .state('suppliers', {
        url: '/suppliers',
        templateUrl:'views/supplier.html',
        controller: 'SupplierCtrl'
      })
      .state('manageSupplier', {
        url: '/suppliers/:id',
        templateUrl:'views/manageSupplier.html',
        controller: 'ManageSupplierCtrl'
      })
      .state('products', {
        url: '/products',
        templateUrl:'views/product.html',
        controller: 'ProductCtrl'
      })
      .state('manageProducts', {
        url: '/products/:id',
        templateUrl:'views/manageProduct.html',
        controller: 'ManageProductsCtrl'
      })
      .state('inventory', {
        url: '/inventory',
        templateUrl:'views/inventory.html',
        controller: 'ProductCtrl'
      })
      .state('purchase', {
        url: '/purchase',
        templateUrl:'views/newPurchase.html',
        controller: 'PurchaseCtrl'
      })
      .state('purchaseTransactions', {
        url: '/transactions',
        templateUrl:'views/purchaseTransactions.html',
        controller: 'PurchaseTransactionsCtrl'
      })
      .state('viewPurchaseTransactions', {
        url: '/transactions/:id',
        templateUrl:'views/viewPurchaseTransactions.html',
        controller: 'ViewPurchaseTransactionsCtrl'
      });
  }])
  .run(function($rootScope, $location){
        $rootScope.location = $location;

        /*Nav bar menu acitivator*/
        $rootScope.isActive = function (viewLocation) {
          if ($location.path().search(viewLocation) >= 0) {
            return true;
          }
          return false;
        };

        /* Determine which menu to display on side nav*/
        $rootScope.sideBar = function (){
          if( ($location.path().search("/products") >= 0) || ($location.path().search("/inventory") >= 0) ||
           ($location.path().search("/purchase") >= 0) || ($location.path().search("/transactions") >= 0)) {
              return "inventory";
          } else if ( ($location.path().search("/users") >= 0) || ($location.path().search("/customers") >= 0) || 
            ($location.path().search("/suppliers") >= 0)) {
            return "user";
          } else if ( ($location.path() !== '/login') && ($location.path().search("/sales") >= 0) ){
            return "sales";
          }
        };
  });


