var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/'));

var myJsonObj =
    {"dinner":"so good", "numberOfDinners":"44"}

app.get("/myJson",function(req, res){
 res.json(myJsonObj);
});

app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});

