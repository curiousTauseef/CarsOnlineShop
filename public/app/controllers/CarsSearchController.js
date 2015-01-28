app.controller('CarsSearchController', function($scope, $location, cachedBrandsCatalogue, ModelsResource, CarAdsService, $timeout) {
  $scope.brands = cachedBrandsCatalogue.query();
  $scope.options = {};
//  $scope.results = [
//    {
//      brand: {
//        name: 'bmw'
//      },
//      model: {
//        name: '300'
//      },
//      fuelType: 'Gas',
//      gearBox: 'Manual',
//      price: 200,
//      year: 2008
//    }];
  //$scope.options.selectedBrand = $scope.brands[0];
  $scope.changeBrand = function() {
    if($scope.options.selectedBrand) {
      $scope.models = ModelsResource.query({ brandId: $scope.options.selectedBrand });
      $scope.options.selectedModel = $scope.models[0];
    } else {
      $scope.models = [];
    }
  };

  $scope.search = function(options) {
    console.dir(options);
    CarAdsService.searchByOptions(options)
      .then(function(carsP) {
        $scope.cars = carsP.cars;
        //angular.copy($scope.cars, cars);
        //$location.path('/searchResults');
        //$timeout(function() {
//          $scope.cars2 = cars;
//          console.log($scope.cars2);
//          angular.copy($scope.cars2, $scope.cars);
//          console.log($scope.cars);

        //})

      }, function(err) {
        console.log(err);
      })
  }
});