app.factory('ModelsResource', function($resource){
  var ModelsResource = $resource('/api/models/:brandId', { brandId: '@_id' });

  return ModelsResource;
});