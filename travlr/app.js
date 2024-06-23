// app.js

require('dotenv').config();

const createError = require('http-errors');

const express = require('express');
const router = express.Router();

const jwt = reqire('express-jwt')
const auth = jwt({
  secret: process.env.JWT_SECRET,
  useProprthy: 'payload'
});

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs'); // Import hbs

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./app_api/routes');

const app = express();

const passport = require('passport');

require('./app_api/models/db');

require('./app_api/config/passport');

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Register partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// allow CORS
app.use('/api', (req, res, next) => { res.header('Access-Control-Allow-Origin','http://localhost:4200');
  res.header('Acesss-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Controll-Allow-Methods','GET, POST, PUT, DELETE');
  next();
});

// Catch 404 and forward to error handler
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"message": err.name + ": " + err.message})
  }
})

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.use(passport.initialize());

module.exports = app;
