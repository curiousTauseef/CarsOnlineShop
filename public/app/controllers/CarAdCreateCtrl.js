app.controller('CarAdCreateCtrl', function($scope, cachedBrandsCatalogue) {
  $scope.brands = cachedBrandsCatalogue.query();
  console.dir($scope.brands);
  $scope.selectedBrand = $scope.brands[0];
  $scope.changeBrand = function() {
    $scope.selectedModel = $scope.selectedBrand.models[0];
  }
});