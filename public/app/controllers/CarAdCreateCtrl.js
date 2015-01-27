app.controller('CarAdCreateCtrl', function($scope, cachedBrandsCatalogue) {
  $scope.brands = cachedBrandsCatalogue.query();
  $scope.carad = {};
  $scope.carad.selectedBrand = $scope.brands[0];
  $scope.changeBrand = function() {
    $scope.carad.selectedModel = $scope.carad.selectedBrand.models[0];
    console.log('change brand');
    console.dir($scope.carad.selectedBrand);
  };

  $scope.createAd = function(carAd) {
    console.dir(carAd);
  }
});