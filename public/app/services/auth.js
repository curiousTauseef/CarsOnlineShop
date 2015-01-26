app.factory('auth', function($http, $q, identity, UsersResource) {
  return {
    signup: function(user) {
      var deferred = $q.defer();
      if(user.password !== user.repeatPassword) {
        deferred.reject('Password not confirmed');
      } else {
        var user = new UsersResource(user);
        user.$save().then(function(response) {
          if(response.error) {
            deferred.reject(response.error);
          } else {
            identity.currentUser = user;
            deferred.resolve();
          }
        }, function (response) {
          deferred.reject(response);
        });
      }

      return deferred.promise;
    },
    login: function(user) {
      var deferred = $q.defer();

      $http.post('/login', user).success(function(response) {
        if(response.success) {
          var user = new UsersResource();
          angular.extend(user, response.user);
          identity.currentUser = user;
          deferred.resolve(true);
        }
        else {
          deferred.resolve(false);
        }
      });

      return deferred.promise;
    },
    logout: function() {
      var defered = $q.defer();

      $http.post('/logout').success(function() {
        identity.currentUser = undefined;
        defered.resolve();
      });

      return defered.promise;
    },
    isAuthenticated: function() {
      if(identity.isAuthenticated()) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    },
    isAdmin: function() {
      if(identity.isAdmin()) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    }
  }
});