//Setup
const express = require('express'),
       router = express.Router();

//Import server config
let server = require("./../server");
let conn = server.conn;

//Get users
router.get('', function(req, res) {
  let sql = "SELECT * FROM user;";
  conn.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Get all users."
    })
  })
});

//Signup user

/*
  Example of having the index etc in the request url
  http://localhost:8080/api/1
  app.get('/api/:version', function(req, res) {
      res.send(req.params.version);
  });
*/


//Check login
router.get('/login', function(req, res) {
  var email = req.query.email;
  var password = req.query.password;
  //console.log([email, password]);
  let sql = "select u_id from user where email = ? and password = ?";
  conn.query(sql, [email, password], function(err, data, fields) {
    if (err) throw err;
    if(data.length == 1){
      res.json({
        status: 200,
        data,
        message: "Login Successful"
      });
    }
    else{
      res.json({
        status: 404,
        message: "Login Unsuccessful"
      });
    }

    // console.log(JSON.stringify({
    //   status: 200,
    //   data,
    //   message: "Login Successful"
    // }));
  })
});

module.exports = router;
