const express = require('express');
const morgan = require('morgan');

const pool = require('./database')

/*
INITS
Initializate modules
*/
const app = express();


/*
SETTINGS
Configuration for the server
*/
//Setting port on 4000 or the environment already defined port
app.set('port', process.env.PORT || 4000);


/*
MIDDLEWARES
Functions executed for every request, whereas client or thir party apps
*/
//Logs messages with 'dev' format thanks to Morgan
app.use(morgan('dev'));
//when extended of urlencoded is false, we can only allow text, not images.
app.use(express.urlencoded({ extended: false }));
//To receive and send json
app.use(express.json());


/*
GLOBAL VARIABLES
Variables for a global usage in the APP
*/
//This function is like a stop, gets a req, does something and send a res, and then next() To continue the APP
app.use((req, res, next) => {
    next();
});

/*
ROUTES
How endpoints should behave
*/
//App uses what index.js has
app.use(require('./routes/index.js'));


/*
SV START
Defining on which port and what behavior
*/
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
