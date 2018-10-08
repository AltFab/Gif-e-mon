//populate the gameboard with userGif and enemyGif
$(document).ready(function () {
   
    //call connection to MySQL'
    //populate userGif
    //populate enemyGif


    //battle log round # (via enemy gif ID)
    //battle log start game.
    
    //temporary variables
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



});