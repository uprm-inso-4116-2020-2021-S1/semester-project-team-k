
//Declare components
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require("cors");

//Import server config
let conn = require('./server');

//Connect to the server
conn.connect(function(error){
  if(error) console.log(error);
  else console.log("Connected");
});

//Declare application type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//Declare routers
const userRouter = require('./routes/user');
const bookRouter = require('./routes/book');

//Use routers
app.use('/users', userRouter);
app.use('/book', bookRouter);

//Listen
var serverListen = {
  port:9998
};

//Starting the server
app.listen( serverListen.port , () => console.log(`Server started, listening port: ${serverListen.port}`));

module.exports = app;

