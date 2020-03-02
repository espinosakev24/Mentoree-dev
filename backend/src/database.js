const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./keys');

//Create a pool in database for queries and also handles errors
const pool = mysql.createPool(database);

//Error handlers
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has to many connections');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused');
    }
  }

  //If DB is connected then release and start connection...
  if (connection) connection.release();
    console.log('DB is Connected');

  return;
});

//Each time I want to query something, I can use a promise
//Why a promise? Each query takes time, and there must be a promise
//that the query will be found and executed
pool.query = promisify(pool.query);
module.exports = pool;
