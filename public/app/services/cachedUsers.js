app.factory('cachedUsers', function(UsersResource) {
  var cachedUsers;

  return {
    query: function() {
      if(!cachedUsers) {
        cachedUsers = UsersResource.query();
      }

      return cachedUsers;
    }
  }
});