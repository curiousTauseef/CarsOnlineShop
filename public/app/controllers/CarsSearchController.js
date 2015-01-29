app.controller('CarsSearchController', function($scope, $location, cachedBrandsCatalogue, ModelsResource, CarAdsService, notifier, identity) {
  $scope.identity = identity;
  $scope.brands = cachedBrandsCatalogue.query();
  $scope.options = {};
  $scope.sortBy = 'year';
  $scope.sortPrefix = '';
  var sortAsc = true;
  $scope.searchCalled = false;
  $scope.carSelected = false;

  $scope.changeBrand = function() {
    if($scope.options.selectedBrand) {
      $scope.models = ModelsResource.query({ brandId: $scope.options.selectedBrand });
      $scope.options.selectedModel = $scope.models[0];
    } else {
      $scope.models = [];
    }
  };

  $scope.search = function(options) {
    $scope.searchCalled = true;
    CarAdsService.searchByOptions(options)
      .then(function(response) {
        $scope.cars = response.cars;
      }, function(err) {
        console.log(err);
      })
  };

  $scope.changeSort = function(newSort) {
    if(newSort === $scope.sortBy) {
      if(sortAsc) {
        $scope.sortPrefix = '-'
      } else {
        $scope.sortPrefix = '';
      }

      sortAsc = !sortAsc;
    } else {
      $scope.sortBy = newSort;
      $scope.sortPrefix = '';
      sortAsc = true;
    }
  };

  $scope.selectCar = function(car) {
    console.log('SELECT CAR');
    $scope.carOnFocus = car;
    $scope.carSelected = true;
  };

  $scope.deleteCar = function(car) {
    CarAdsService.deleteCar(car)
      .then(function(response) {
        if(response.success) {
          notifier.success('Car deleted!');
          $scope.cars = $scope.cars.filter(function(c) {
            return c._id != car._id;
          })
        } else {
          notifier.error('Failed deleting the car');
        }
      }, function(err) {
        notifier.error(err.toString());
        console.log('Error deleting carad: ' + err);
      })
  }
});