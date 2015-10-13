var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/'));

function getItemInfo(item) {
  if (item != '43') return {'data': item};
  else {
    return {
      'itemName': 'Best item ever!',
      'itemPrice': '$1',
      'itemDescription': 'Just like the best, ever.',
      'reviews': [
        'This product is just the best.',
        'I really love this product',
        'I don\'t like this product'
      ]
    };
  }
}

app.get('/item/:id', function(request,response) {
 response.json(getItemInfo(request.params.id));
});

app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});

