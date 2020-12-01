//Setup
const express = require('express'),
       router = express.Router();

//Import server config
let conn = require("../server");


//Get book with general search
router.get('', function(req, res) {
    var search = req.query.search;

    // Check not null
    if(search !== null){
        let sql = `call SearchBooks(?);`;
        conn.query(sql, [search], function(err, data, fields) {
                
                if(err) {
                    res.json({
                        status: 400,
                        message: "Error retrieving book."
                    });
                }

                // If there is one or more rows that match the search criteria return them, otherwise return 404 not found
                if(data.length > 0 && data[0].length > 0){
                    res.json({
                        status: 200,
                        data: data[0],
                        message: "Book(s) found."
                    });
                }
                else{
                    res.json({
                        status: 404,
                        message: "No books match your search criteria."
                    });
                }  
            }
        )
    }
    else {
        res.json({
        status: 400,
        message: "Error retrieving book. Invalid search value in query."
        });
    }
});

module.exports = router;
