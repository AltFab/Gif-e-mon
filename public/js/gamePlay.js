//populate the gameboard with userGif and enemyGif
$(document).ready(function () {
    //new round function to change rounds and then enemies.
    var gameRound = 5;
    var ID = "";
    console.log(gameRound);
    



    newRound();
    function newRound() {
        if (gameRound > 1) {
            ID = gameRound
        } else if (gameRound === 1) {
            ID = 1;
        }
        enemyField();
    };

    console.log(ID + " id");
    function enemyField() {
        //populates enemy field
        $.get("/api/allEnemies/" + ID, function (data) {
            console.log("enemy")
            gifFiller(data);

            function gifFiller(data) {
                var newHeader = $("<div>");
                newHeader.addClass("card-title")
                newHeader.addClass("h5");
                newHeader.text(data.enemy_gif_name);
                $("#enemyName").append(newHeader);
                console.log(data.enemy_gif_name);

                console.log("creating img gif");
                var newGif = $("<img />");
                newGif.addClass("img-responsive");
                newGif.attr("src", data.enemy_gif_link);
                newGif.attr("id", "bye-bye");
                $("#enemyGif").append(newGif);
                console.log(data.enemy_gif_link)

            }
        })
    };

    //populate user field
    $.get("/api/allUsers/" + ID, function (data) {
        console.log("user")
        userFiller(data);

        function userFiller(data) {
            var newHeader = $("<div>");
            newHeader.addClass("card-title")
            newHeader.addClass("h5");
            newHeader.text(data.user_name);
            $("#userName").append(newHeader);


            console.log("creating img gif");
            var newGif = $("<img />");
            newGif.addClass("img-responsive");
            newGif.attr("id", "bye-bye");
            newGif.attr("src", data.gif_link);
            $("#userGif").append(newGif);


        }
    });
});
var player_hp = 100;
    var enemy_hp = 100;
    var score = 0;

//user clicks button calls operations.
    $("#attackButton").on("click", function () {
        var attackChance = Math.floor((Math.random() * 100) + 1);
        console.log("Attack Roll: " + attackChance);
        
        if (attackChance >= 95) {
            //attack of the userGIF as base stat
            var critDamage = Math.floor((Math.random() * 12) + 4);
            console.log("Crit Damage: " + critDamage);
            enemy_hp -= critDamage;
            score += critDamage;

            //display battlelog info
            $("#playerlog").empty().append("Critical Stike! You hit for " + critDamage + " damage!");
        }

        else if (attackChance <= 10) {
            //miss attack do not change enemy health
            console.log("You missed.")
            $("#playerlog").empty().append("Your attack missed!");
        }

        else {
            //normal damage
            var damage = Math.floor((Math.random() * 6) + 2);
            console.log("Damage: " + damage);
            enemy_hp -= damage;
            score += damage;
            $("#playerlog").empty().append("You hit for " + damage + " damage!");
        }

    $("#enemyHPBar").animate({width: enemy_hp},"slow");

    console.log("Enemy HP: " + enemy_hp);
    console.log("Score: " + score);

    $("#scoretrack").empty().append("You received " + score + " points.");
    $("#totalscore").empty().append("Total Score: " + score);

    enemyAttack();
})

    function enemyAttack() { //enemy attacking function
        var enemyDamage = Math.floor((Math.random() * 8) + 2);
        console.log("Enemy Damage: " + enemyDamage);
        console.log("====================");
        player_hp -= enemyDamage;
        $("#enemylog").empty().append("The enemy hits for " + enemyDamage + " damage!");
        $("#playerHPBar").animate({width: player_hp},"slow");
    
  }; //end enemyAttack



