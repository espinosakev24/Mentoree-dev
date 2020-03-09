const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

/*
INITS
Initializate modules
*/
const app = express();

/*
SETTINGS
Configuration for the server
*/
// Setting port on 4000 or the environment already defined port
app.set('port', process.env.PORT || 4000);

/*
MIDDLEWARES
Functions executed for every request, whereas client or thir party apps
*/
// Allow other servers to request API data from this server
app.use(cors());
// Logs messages with 'dev' format thanks to Morgan
app.use(morgan('dev'));
// when extended of urlencoded is false, we can only allow text, not images.
app.use(express.urlencoded({ extended: false }));
// To receive and send json
app.use(express.json());

/*
GLOBAL VARIABLES
Variables for a global usage in the APP
*/
// This function is like a stop, gets a req, does something and send a res, and then next() To continue the APP
app.use((req, res, next) => {
  next();
});

/*
ROUTES
How endpoints should behave
*/
// App uses what index.js has
app.use('/api/students', require('./routes/students'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/teachers', require('./routes/teachers'));

module.exports = app;
