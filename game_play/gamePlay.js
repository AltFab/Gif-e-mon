//populate the gameboard with userGif and enemyGif
$(document).ready(function () {
   
    //call connection to MySQL'
    connection.query('SELECT * FROM gifedex', (err,rows) => {
        if(err) throw err;
    });
    //populate userGif
    //populate enemyGif


    //battle log round # (via enemy gif ID)
    //battle log start game.
    
});


//user clicks button calls operations.
$("#actionButton").on("click", function () {
    var actionChosen = $(this).val()
    switch (actionChosen) {
        case attack:
            attack();
            break;
        case defend:
            defend();
            break;
        case potion:
            potion();
            break;
    }
});

function attack() {
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
    else (){
        //static base damage
        var damage = attack * Math.floor((Math.random() * 6) + 2);

        $("#battlelog").empty().append("You hit for " + damage + " damage!");
        enemy_hp -= damage;
        $("#enemyHP").innerHTML = "Health: " + enemyHealth + "/100";
    }
    then.hpCheck();

}
//animate icon
//decrease hp
// check if Enemy Hp = zero
function hpCheck() {
    if (enemy_hp === 0) {
        //userscore increase by 50 points
        winBonus = 50;
        score = score + winBonus;

        //user new stats        
        //update user stats to mySQL


        
    } else {

        //update new hp to database

        endTurn()
    }
}



