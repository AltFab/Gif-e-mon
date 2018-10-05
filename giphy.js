// initialize jquery
$(document).ready(function(){
    var randoGif = {
        gif_link:"", 
        user_name:"",
        health:10,
        attack:0,
        potion:3,
    };
    console.log(randoGif);

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

        randoGif.gif_link = results.images.fixed_height.url;
// populates the gif
        $("#gifs").prepend(image);
        });
    });

$("#start").on("click", function(){
    randoGif.user_name = $("#username").val().trim();
    //send to mysql  randoGif
    
    console.log(randoGif);
});
});