var app = angular.module('app', ['ngResource', 'ngRoute']);

app.value('author', 'Vasil Todorov');
app.value('year', '2015');
app.value('toastr', toastr);

app.config(function($routeProvider) {
  var routeUserChecks = {
    adminRole: {
      authenticate: function(auth) {
        return auth.isAdmin();
      }
    },
    authenticated: {
      authenticate: function(auth) {
        return auth.isAuthenticated();
      }
    }
  };

  $routeProvider
    .when('/', {
      templateUrl: '/partials/home',
      controller: 'HomeCtrl'
    })
    .when('/admin/users', {
      templateUrl: '/partials/users',
      controller: 'UsersCtrl',
      resolve: routeUserChecks.adminRole
    })
    .when('/users/profile/:id', {
      templateUrl: '/partials/user-profile',
      controller: 'UserProfileCtrl',
      resolve: routeUserChecks.adminRole
    })
    .when('/signup', {
      templateUrl: '/partials/signup',
      controller: 'SignUpCtrl'
    })
});

app.run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
});