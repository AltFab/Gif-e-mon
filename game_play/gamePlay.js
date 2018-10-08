//populate the gameboard with userGif and enemyGif
$(document).ready(function () {
   
    //call connection to MySQL
    //populate userGif
    //populate enemyGif


    //battle log round # (via enemy gif ID)
    //battle log start game.
    
});

//user clicks button calls operations.
// $("#actionButton").on("click", function () {
//     var actionChosen = $(this).val()
//     switch (actionChosen) {
//         case attack:
//             attack();
//             break;
//         case potion:
//             potion();
//             break;
//     }
// });

$("#attackButton").on("click", function(){
    console.log("attack");
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
    else if (attackChance === 0){
        //static base damage
        var damage = attack * Math.floor((Math.random() * 6) + 2);

        $("#battlelog").empty().append("You hit for " + damage + " damage!");
        enemy_hp -= damage;
        $("#enemyHP").innerHTML = "Health: " + enemyHealth + "/100";
    }
 

});

// create potion function
function potion(event){
    // when potion equals 0, this function does not activate
    if(potion === 0){
        event.preventDefault();
    }
    else if (potion <= 3){
    // potions are going to recover 70% of user health
        var potions = Math.floor(7/health * 100);
    // display battle log
    $("#battlelog").empty().append("You have recovered some health!")
    // add 70% to health
    health += potions;
    // display user's updated health
    $("#userHP").innerHTML = "Health: " + health;
    // subtract 1 potion
    potion -= 1;
    console.log(potion);
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



