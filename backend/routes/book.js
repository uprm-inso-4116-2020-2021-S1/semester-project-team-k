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
        let sql = "select title, isbn, subject, genre, year, edition, description from item join book where item.i_id = book.i_id;";

        conn.query(sql, function(err, data, fields) {
                var count = 0;
                var response = {};  // Return dictionary with rows that match the search criteria

                // Iterate RowDataPackets to extract values from DB
                for (var i = 0; i < data.length; i++) {  
                    // Convert RowDataPacket into JSON and then into a string
                    var json = JSON.parse(JSON.stringify(data[i]));  
                    var jsonStr = "";
                    for(var key of Object.keys(json)){
                        jsonStr += " " + json[key];
                    }
                    
                    // If a match was found add json row to response dictionary
                    if(jsonStr.toLowerCase().indexOf(search.toLowerCase()) !== -1){
                        response[count++] = json;
                    }
                }

                // If there is one or more rows that match the search criteria return them, otherwise return 404 not found
                if(Object.keys(response).length > 0){
                    res.json({
                        status: 200,
                        data: response,
                        message: "Books found."
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
