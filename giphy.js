// initialize jquery
$(document).ready(function(){

// on click function generates and pulls gif from giphy
$("button#random-gif.btn.btn-primary").on("click", function(){
// this method rotates to the next gif and removes the current one
    $("#gifs").empty();
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg-13&tag=cartoon";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response){
        
        var results = response.data;
        console.log(response);

        var image = $("<img>");

        image.attr("src", results.images.fixed_height.url);
        image.attr("class", "item");
// populates the gif
        $("#gifs").prepend(image);
        });
    });
});
