app.factory('cachedBrandsCatalogue', function($resource) {
  var brands,
    BrandsResource = $resource('/api/brands');

  return {
    query: function() {
      if(!brands) {
        console.log('NOT INITIALIZED BRANDS');
        brands = BrandsResource.query();
        return brands;
      } else {
        console.log('BRANDS INITIALIZED ');
        console.log(brands);
        return brands;
      }
    }
  }
});