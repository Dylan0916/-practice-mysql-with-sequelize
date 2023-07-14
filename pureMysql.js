const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection(config);

function run() {
  connection.query('SELECT * FROM movies', (error, results, fields) => {
    if (error) {
      throw error;
    }

    console.log(error);
    console.log(results);
  });
}
