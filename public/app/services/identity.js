app.factory('identity', function($window, UsersResource) {
  var user;
  if($window.bootstrappedUserObject) {
    user = new UsersResource();
    angular.extend($window.bootstrappedUserObject, user);
  }
  return {
    currentUser: user,
    isAuthenticated: function() {
      return !!this.currentUser;
    },
    isAdmin: function() {
      return !!this.currentUser && this.currentUser.isAdmin;
    }
  }
});