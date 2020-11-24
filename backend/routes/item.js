//Setup
const express = require('express'),
       router = express.Router();

//Import server config
let conn = require("../server");

//Supporting functions
function getItemFromReq(req){
  const item = [req.body.description,
                req.body.price,
                req.body.quantity_available,
                req.body.c_id
                ];
  return item;
}


//Add item
router.post('/add', function(req, res) {
  let item = getItemFromReq(req);
  
  // Check not null
  if(item.every(function(i){ return i !== null; })){
    let sql = "INSERT INTO item (description, price, quantity_available, c_id) " +
              "VALUES (?, ?, ?, ?); " +
              "SELECT LAST_INSERT_ID(); ";

    conn.query(sql, item, function(err, data, fields) {
        if(data.length == 1){
          res.json({
            status: 201,
            data,
            message: "Added Item successfully."
          });
        }
        else{
          res.json({
            status: 400,
            message: "Error adding item."
          });
        }
      }
    )
  }
  else {
    res.json({
      status: 400,
      message: "Error adding item. Invalid values in body."
    });
  }
});

module.exports = router;
