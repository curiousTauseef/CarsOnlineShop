app.factory('cachedBrandsCatalogue', function($resource) {
  var brands,
    BrandsResource = $resource('/api/brands');

  return {
    query: function() {
      if(!brands) {
        brands = BrandsResource.query();
      }

      return brands;
    }
  }
});