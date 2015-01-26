app.controller('UserProfileCtrl', function($scope, $routeParams, UsersResource, notifier) {
  $scope.user = UsersResource.query({ id: $routeParams.id }, function(collection) {
    collection.forEach(function(user) {
      if(user._id === $routeParams.id) {
        $scope.user = user;
      }
    })
  });
//  $scope.user = cachedUsers.query().$promise.then(function(collection) {
//    console.log('In profile ctrl');
//    collection.forEach(function(user) {
//      if(user._id === $routeParams.id) {
//        $scope.user = user;
//      }
//    })
//  })
});