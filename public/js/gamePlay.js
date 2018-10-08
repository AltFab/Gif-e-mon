//populate the gameboard with userGif and enemyGif
$(document).ready(function () {
    //new round function to change rounds and then enemies.
    var gameRound = 1;
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
            newGif.attr("src", data.gif_link);
            $("#userGif").append(newGif);


        }
    });
});
//battle log round # (via enemy gif ID)
//battle log start game.



//user clicks button calls operations.
$("#actionAttack").on("click", function() {
        var attackChance = Math.floor((Math.random() * 100) + 1);
        console.log(attackChance);
        if (attackChance >= 95) {
            //attack of the userGIF as base stat
            var critDamage = Math.floor((Math.random() * 12) + 4);
    
            //score increase
            score = score + critDamage;
    
            //update damage of enemy
    
            //display battlelog info
            $("#battlelog").empty().append("Critical Stike! You hit for " + critDamage + " damage!");
            enemy_hp -= critDamage;
            $("#enemyHP").innerHTML = "Health: " + enemy_hp;
        }
        else if (attackChance <= 10) {
            //miss attack do not change enemy health
            $("#battlelog").empty().append("You your attack missed!");
    
        }
        else {
            //static base damage
            var damage = attack * Math.floor((Math.random() * 6) + 2);
    
            $("#battlelog").empty().append("You hit for " + damage + " damage!");
            enemy_hp -= damage;
            $("#enemyHP").innerHTML = "Health: " + enemyHealth + "/100";
        }
        // then.hpCheck();
    
    }
);

$("#actionPotion").on("click", function () {
   console.log("potion called")
});

//animate icon
//decrease hp
// check if Enemy Hp = zero
// function hpCheck() {
//     if (enemy_hp === 0) {
//         //userscore increase by 50 points
//         winBonus = 50;
//         score = score + winBonus;

//         //user new stats        
//         //update user stats to mySQL



//     } else {

//         //update new hp to database

//         endTurn()
//     }
// }
