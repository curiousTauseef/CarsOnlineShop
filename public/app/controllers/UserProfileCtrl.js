app.controller('UserProfileCtrl', function($scope, $routeParams, UsersResource) {
  $scope.user = UsersResource.query({ id: $routeParams.id }, function(collection) {
    collection.forEach(function(user) {
      if(user._id === $routeParams.id) {
        $scope.user = user;
      }
    })
  });
});