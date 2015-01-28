app.controller('HomeCtrl', function($scope, author, year, CarAdsService, notifier) {
  $scope.author = author;
  $scope.year = year;

  CarAdsService.getLastN(5).then(function(carAds) {
    $scope.carAds = carAds;
  })
});
