//Declare server components
const mysql = require('mysql'),
  config = require("./db_config");

//Create connection
let db = config.database;
let conn = mysql.createConnection({
    host:db.host,
    user:db.user,
    password:db.password,
    database:db.database
});

module.exports = conn;