$(document).ready(function () {

    $("#easy").on("click", function () {
        console.log("click modal");
        $("#modal-id").addClass("active");
    });
    $("#close").on("click", function () {
        console.log("close modal");
        $("#modal-id").removeClass("active");
    });
    
    // create variable object to pull data from sql
    var randoGif = {
        gif_link: "",
        user_name: "",
        health: 10,
        attack: 0,
        potion: 3,
        buildPicked: "",
        levelDone: 0,


    };
    console.log("base gif stats")
    console.log(randoGif);

    // on click function generates and pulls gif from giphy
    $("button#random-gif.btn.btn-primary").on("click", function () {
        // this method rotates to the next gif and removes the current one
        $("img#melon-bye").attr("src", "animated-gif");
        $("img#melon-bye").hide();
        $("#gifs").empty();
       
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=NUmzu2fHHFydYfDYcToF2MqA12752Vfe&rating=pg-13&tag=cartoon";
        console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);

                var results = response.data;


                var image = $("<img>");

                image.attr("src", results.images.fixed_height.url);
                image.attr("class", "animated-gif");

                randoGif.gif_link = results.images.fixed_height.url;
                // populates the gif
                $("#gifs").prepend(image);
            });
    });

    //user clicks a desired build. manipulates stats accordingly 
    $(".buildButton").on("click", function () {
        var buildChosen = $(this).val();
        randoGif.buildPicked = buildChosen;
        console.log(buildChosen);
        console.log(randoGif.buildPicked);

        switch (buildChosen) {
            case "attack": {
                randoGif.attack = 6;
                randoGif.health = randoGif.health + 4;
            }
                break;
            case "defense": {
                randoGif.attack = 4;
                randoGif.health = randoGif.health + 6;
            }
                break;
            case "balance": {
                randoGif.attack = 5;
                randoGif.health = randoGif.health + 5;
            }
                break;
        }

        $(".buildButton").attr("disabled", "disabled");

    })

    //start game button grabs all user set up info, creates a new user in db.
    // then moves to gameplay html.
    $("#start").on("click", function () {
        randoGif.user_name = $("#username").val().trim();
        //send to mysql  randoGif
        console.log("gif stats modified")
        console.log(randoGif);

        createUser(randoGif);

        function createUser(randoGif) {
            $.post("/api/newUser/", randoGif, function () {
                window.location.href = "/game";
            });
        };


    });

});