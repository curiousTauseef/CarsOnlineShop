app.controller('HomeCtrl', function($scope, author, year) {
  $scope.author = author;
  $scope.year = year;
  $scope.cars = [
    {
      mark: 'Bmw',
      engine: '3.0V6'
    },
    {
      mark: 'Mercedes',
      engine: '63 AMG'
    }
  ]
});
