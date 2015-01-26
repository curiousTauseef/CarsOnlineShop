app.controller('LoginCtrl', function($scope, $location, $http, notifier, identity, auth) {
  $scope.identity = identity;

  $scope.login = function(user) {
    auth.login(user).then(function(success) {
      if(success) {
        notifier.success('Successful login!');
      } else {
        notifier.error('Username or password do not match');
      }
    })
  };

  $scope.logout = function() {
    auth.logout().then(function() {
      notifier.success('Successful logout');
      if($scope.user) {
        $scope.user.username = '';
        $scope.user.password = '';
      }

      $location.path('/');
    })
  }
});