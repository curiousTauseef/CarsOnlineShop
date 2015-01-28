var express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  passport = require('passport'),
  logger = require('morgan'),
  busboy = require('connect-busboy'),
  favicon = require('serve-favicon');

module.exports = function(app, config) {
  app.set('view engine', 'jade');
  app.set('views', config.rootPath + '/server/views');
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(busboy({immediate: false}));
  app.use(session( { secret: 'change that string later', resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(config.rootPath + '/public'));
  app.use(favicon(config.rootPath + '/public/img/favicon.ico'));
};