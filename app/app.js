var app = angular.module('myApp', ['ui.router', 'ui.router.title'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/home/views/home.html',
        controller: 'HomeController',
        meta: {
          title: 'Homepage',
          description: 'Your Favorite Programming Languages, Side By Side'
        },
      })

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
])

.run(['$rootScope', '$state',
  function($rootScope, $state) {
    // ngMeta.init();
    var afterLogin;


    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    });

    $rootScope.$on('$stateChangeSuccess', function() {
      $rootScope.title = $state.current.meta.title;
      $rootScope.description = $state.current.meta.description;
      progress.complete();
    });
  }
])
