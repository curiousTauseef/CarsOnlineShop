app.controller('UsersCtrl', function($scope, $q, UsersResource, identity, notifier) {
  $scope.users = UsersResource.query();

  $scope.deleteUser = function(userId) {
    UsersResource.delete({ id: userId }, function(success) {
      if(success) {
        notifier.success('User deleted');
      } else {
        notifier.error('User can\'t be deleted');
      }
    })
  }
});