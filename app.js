var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Require Passport
var passport = require('passport');

// [SH] Bring in the data model
require('./authorization/models/ejo-storage');

// Bring in the passport config after the model is defined
require('./authorization/config/passport');

// [SH] Bring in the routes for the API (delete the default routes)
var Rapi = require('./authorization/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'ejo-logo.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', Rapi);

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

// Back-End URI
app.get('/sign', function(request, response) {
  response.status(200).send("<h1>Working!</h1>");
});

// serve static content in Bower to uri extension /static API
app.use('/static', express.static(__dirname + '/bower_components'));

// angular reload fallback
app.use(function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
