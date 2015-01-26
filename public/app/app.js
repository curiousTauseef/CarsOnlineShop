var app = angular.module('app', ['ngResource', 'ngRoute']);

app.value('author', 'Vasil Todorov');
app.value('year', '2015');

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home',
      controller: 'HomeCtrl'
    })
});