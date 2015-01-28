app.filter('brandFilter', function(cachedBrandsCatalogue) {
  var brands = cachedBrandsCatalogue.query();
  return function(brandId) {
    for(var i = 0; i < brands.length; i+=1) {
      if(brands[i]._id == brandId) {
        return brands[i].name;
      }
    }
  }
});