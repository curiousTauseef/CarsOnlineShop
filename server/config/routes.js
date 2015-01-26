var express = require('express');

module.exports = function(app) {
  app.get('/', function(req, res) {
    console.log('requested index');
    res.render('index');
  });
  app.get('/partials/:partialName', function(req, res) {
    console.log('requested partial:  ' + req.params.partialName);
    res.render('../../public/app/views/' + req.params.partialName);
  })
};
