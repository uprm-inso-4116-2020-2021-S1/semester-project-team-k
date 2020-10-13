//Setup
const express = require('express'),
       router = express.Router();

//Import server config
let server = require("./../server");
let conn = server.conn;

//Get user lists
router.get('/list', function(req, res) {
  let sql = "SELECT * FROM user";
  conn.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Get all users."
    })
  })
});

module.exports = router;
