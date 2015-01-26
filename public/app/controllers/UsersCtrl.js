app.controller('UsersCtrl', function($scope, $q, UsersResource, identity, notifier) {
  $scope.users = UsersResource.query();

  $scope.deleteUser = function(userId) {
    UsersResource.delete({ id: userId }, function(status) {
      if(status.success) {
        notifier.success('User deleted');
        $scope.users = UsersResource.query();
      } else {
        notifier.error('Error: ' + status.error);
      }
    })
  }
});