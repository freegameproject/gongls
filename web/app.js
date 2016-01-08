var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users_route = require('./routes/users');
var about_route = require('./routes/about');

var url_route = require('./routes/url');
var game_route = require('./routes/game');
var test_route = require('./routes/test');
var demo_route = require('./routes/demo');

var web_lession_route = require('./routes/web_lession');
var zuowen_lession_route = require('./routes/zuowen_lession');
var h5_lession_route = require('./routes/h5_lession');
var nodejs_lession_route = require('./routes/nodejs_lession');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users_route);

app.use('/about', about_route);

app.use('/url', url_route);
app.use('/demo', demo_route);
/* lessions */
app.use('/web', web_lession_route);
app.use('/h5', h5_lession_route);
app.use('/zuowen', zuowen_lession_route);
app.use('/nodejs', nodejs_lession_route);

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
