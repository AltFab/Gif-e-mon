$(document).ready(function(){

$("#random-button").on("click", function(){

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg-13&tag=cartoon+fighting&offset=4999&limit=1&looping=2";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response){
        
        var results = response.data;

        var image = $("<img>");

        image.attr("src", results.images.fixed_height_still.url);
        image.attr("data-still", results.images.fixed_height_still.url);
        image.attr("data-animate", results.images.fixed_height.url);
        image.attr("data-state", "still");
        image.attr("class", "item");

        $("#gifs").prepend(image);

        $("#attack").on("click", function(){
            var state = $(image).attr("data-state");

            if (state === "still"){
                $(image).attr("src", $(image).attr("data-animate"));
                $(image).attr("data-state", "animate");
            }
            else {
                $(image).attr("src", $(image).attr("data-still"));
                $(image).attr("data-state", "still");
            }
        });
        $("#end-turn").on("click", function(){
            var state2 = $(image).attr("data-state");

            if (state2 === "animate"){
                $(image).attr("src", $(image).attr("data-still"));
                $(image).attr("data-state", "still");
            }
            else {
                $(image).attr("src", $(image).attr("data-animate"));
                $(image).attr("data-state", "animate");
            }
        })
    });
});
});
