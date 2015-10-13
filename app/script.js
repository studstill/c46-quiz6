var response;

$.get('/item/43', null, function(data, status, request) {
      $('#itemName').text(data.itemName);
      $('#itemPrice').text(data.itemPrice);
      $('#itemDescription').text(data.itemDescription);
      displayReviews(data.reviews);
    }, 'json');

function displayReviews(reviews) {

  reviews.forEach(function(reviews) {
    $('#reviews').append('<p>' + reviews + '</p>');
  });
}
