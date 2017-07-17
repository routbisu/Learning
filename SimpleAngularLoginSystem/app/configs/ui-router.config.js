loginApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // Login page ======================================================
  $stateProvider
    .state('login' , {
      url: '/',
      templateUrl: 'app/modules/login/login.partial.html'
    })

});
