app.factory('CarAdsService', function($http, $resource, $q) {
  var CarAdsResource = $resource('/api/cars/:lastN', { lastN:'@lastN'});
  var CarSearchResource = $resource('/api/searchCars');
  return {
    getLastN: function(lastN) {
      var deferred = $q.defer();

      CarAdsResource.query({ lastN: lastN}, function(collection) {
        deferred.resolve(collection);
      });
      return deferred.promise;
    },
    searchByOptions: function(options) {
//      $http({
//        method: 'GET',
//        url: '/api/searchCars',
//        headers: {
//          'Content-Type': 'application/json'
//        },
//        data: options
//      }).success(function(succ){console.log(succ)}).error(function(err){console.log(err)});

      var deferred = $q.defer();
      $http.post('/api/searchCars', {options: options})
        .success(function(cars){
          deferred.resolve(cars);
        })
        .error(function(err){
          deferred.reject(err);
        });

      return deferred.promise;
    }
  }
});