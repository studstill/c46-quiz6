$(function() {

//The .get request accesses the /stardestroyer endpoint
$.get("/stardestroyer", function(data){

//Access the length value from the retrieved JSON object and add it to an li element with the #length id
$("#length").text("Length: " + data.length);
//Access the cost value from the retrieved JSON object and add it to an li element with the #cost id
$("#cost").text("Cost: " + data.cost);
//Access the capacity value from the retrieved JSON object and add it to an li element with the #capacity id
$("#capacity").text("Capacity: " + data.capacity);

});

});
