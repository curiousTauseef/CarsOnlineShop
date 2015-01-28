app.factory('CarAdsService', function($http, $resource, $q) {
  var CarAdsResource = $resource('/api/cars/:lastN', { lastN:'@lastN'});
  return {
    getLastN: function(lastN) {
      var deferred = $q.defer();

      CarAdsResource.query({ lastN: lastN}, function(collection) {
        deferred.resolve(collection);
      });
      return deferred.promise;
    }
  }
});