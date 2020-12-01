//Setup
const express = require('express'),
       router = express.Router();

//Import server config
let conn = require("../server");

//Supporting functions
function getUserFromReq(req){
  const user = [req.body.email,
                req.body.password,
                req.body.is_guest
                ];
  return user;
}

function isValidEmail(email){
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

//Check login
router.get('/login', function(req, res) {
  var email = req.query.email;
  var password = req.query.password;
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
    }
  )
});

//Check signup
router.post('/signup', function(req, res) {
  let user = getUserFromReq(req);

  // Check if user is not null
  if(user.every(function(i){ return i !== null; }) && isValidEmail(user[0])){
    let sql = "INSERT INTO user (email, password, is_guest, date_created, date_modified) " +
              "VALUES (?, ?, ?, now(), now()); " +
              "SELECT LAST_INSERT_ID(); ";

    conn.query(sql, user, function(err, data, fields) {
        if (err) throw err;
        if(data.length == 1){
          res.json({
            status: 201,
            data,
            message: "Signup Successful."
          });
        }
        else{
          res.json({
            status: 400,
            message: "Signup Unsuccessful."
          });
        }
      }
    )
  }
  else{
    res.json({
      status: 400,
      message: "Signup Unsuccessful."
    });
  }
});


module.exports = router;
