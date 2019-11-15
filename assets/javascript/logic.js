
// var animal = $(this).attr("data-name");
var queryURL = "https://pokeapi.co/api/v2/pokemon"

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {

    console.log(response); 
})


