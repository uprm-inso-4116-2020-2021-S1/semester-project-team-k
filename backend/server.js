//declare server components
let express = require('express');
let app = express();
let mysql = require('mysql');
let bodyParser = require('body-parser');
let config = require("./db_config")

//declare application type
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

//create connection
let db = config.database;
let conn = mysql.createConnection({
    host:db.host,
    user:db.user,
    password:db.password,
    database:db.database
});

let server = app.listen(9998, function(){
    let host = server.address().address
    let port = server.address().port
});

//Connect to the server
conn.connect(function(error){
    if(error) console.log(error);
    else console.log("Connected");
});

//Put our queries here:
app.get('/users', function(req, res){
    conn.query('select * from user', function(error, rows, fields){
        if(error) console.log(error);
        else {
            console.log(rows);
            res.send(rows);
            
        }
    })
});

// app.get('/users/{id}', function(req, res){
//     conn.query('select * from user', function(error, rows, fields){
//         if(error) console.log(error);
//         else {
//             console.log(rows);
//             res.send(rows);
            
//         }
//     })
// });