app.filter('nonempty', function() {
  return function(data) {
    console.log(data);
    var result = data != undefined && data.length > 0;
    console.log(result);
    return result;
  }
});
