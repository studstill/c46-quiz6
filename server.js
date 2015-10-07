var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/jsonobj', function(req, res) {
  res.send({"breed":"boxer"});
});

app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});

