var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

//routing modules
var index = require('./routes/index');
var calculations = require('./modules/calculations')


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes
app.use('/calculations', calculations)
//static
app.get('/', index);

app.use(express.static('library/public'));


app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'),function(){
console.log("Listening on port: ", port);
})
