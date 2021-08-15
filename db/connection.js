const mysql = require('mysql2');
const util = require("util");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jd3q13grafton!',
    database: 'employeeTracker_db'
  });

  connection.connect();

//   db.query = util.promisify(connection.query);

  module.exports = connection;
