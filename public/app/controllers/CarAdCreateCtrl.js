app.controller('CarAdCreateCtrl', function($scope, $location, cachedBrandsCatalogue, ModelsResource) {
  $scope.brands = cachedBrandsCatalogue.query();

  $scope.carad = {};
  $scope.carad.selectedBrand = $scope.brands[0];
  $scope.changeBrand = function() {
    $scope.models = ModelsResource.query({ brandId: $scope.carad.selectedBrand });
    $scope.carad.selectedModel = $scope.models[0];
  };

  $scope.submit = function() {
    $location.path('/#/')
  };

  $scope.createAd = function(carAd) {
    console.dir(carAd);
  }
});