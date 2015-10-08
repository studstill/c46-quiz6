var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/'));

app.get("/stardestroyer", function (req, res){

//The sendFile method on the response object sends the stardestroyer.json file. __dirname is referencing the directory where it currently resides.
res.sendFile(__dirname + "/stardestroyer.json");

});

app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});

