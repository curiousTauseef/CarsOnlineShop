var controllers = require('../controllers');

module.exports = function(app) {
  app.get('/', function(req, res) {
    console.log('requested index');
    res.render('index');
  });

  //app.post('/api/')



  app.get('/partials/:partialName', function(req, res) {
    //console.log('requested partial:  ' + req.params.partialName);
    res.render('../../public/app/views/' + req.params.partialName);
  });

  app.get('/api/users', controllers.auth.isAdmin, controllers.users.getAllUsers);
  app.get('/api/users/:id', controllers.auth.isAdmin, controllers.users.getById);
  app.delete('/api/users/:id', controllers.auth.isAdmin, controllers.users.deleteById);

  app.post('/login', controllers.auth.login);
  app.post('/logout', controllers.auth.logout);

  app.get('/api/*', function(req, res) {
    res.status(404);
    res.end();
  });

  app.get('*', function(req, res) {
    res.render('index', {currentUser: req.user});
  })
};
