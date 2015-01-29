app.factory('CarAdsService', function($http, $resource, $q) {
  var CarAdsResource = $resource('/api/cars/:lastN', { lastN:'@lastN'});
  return {
    getLastN: function(lastN) {
      var deferred = $q.defer();

      CarAdsResource.query({ lastN: lastN}, function(collection) {
        deferred.resolve(collection);
      });
      return deferred.promise;
    },
    searchByOptions: function(options) {
      var deferred = $q.defer();

      $http.post('/api/searchCars', {options: options})
        .success(function(cars){
          deferred.resolve(cars);
        })
        .error(function(err){
          deferred.reject(err);
        });

      return deferred.promise;
    },
    deleteCar: function(car) {
      var deferred = $q.defer();
      console.log(car._id);
      $http.delete('/api/cars/' + car._id)
        .success(function(response){
          deferred.resolve(response);
        })
        .error(function(response){
          deferred.reject(response);
        });

      return deferred.promise;
    }
  }
});