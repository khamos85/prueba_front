(function() {
  'use strict';

  var module = angular.module('singApp.orders', [
    'ui.router'
  ]);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.orders', {
        url: '/orders',
        templateUrl: 'app/modules/orders/orders.html',
        controller: 'OrdersController'
      })
  }
})();
