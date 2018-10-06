//TODO button call for switch case.


switch (expression) {
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

function attack() {
    var attackChance = Math.floor((Math.random() * 100) + 1);
    console.log(attackChance); 
    if (attackChance >= 95) {
        //attack of the userGIF as base stat
        var critDamage = Math.floor((Math.random() * 12) + 4);

        $("#battlelog").empty().append("Critical Stike! You hit for " + critDamage + " damage!");
        enemy_hp -= critDamage;
        document.getElementById("enemy_hp").innerHTML = "Health: " + enemy_hp;
    
    else if(attackChance <=10){
        //miss attack do not change enemy health
        // go to enemy turn
    }
    
        
    else()
    //static base damage
    var damage = attack * Math.floor((Math.random() * 6) + 2);

        $("#battlelog").empty().append("You hit for " + damage + " damage!");
        enemyHealth -= damage;
        document.getElementById("enemyHealth").innerHTML = "Health: " + enemyHealth + "/100";
    

    }
    //animate icon
    //decrease hp
    // check if Enemy Hp = zero
    if (ENEMY.HP === 0) {
        //userscore increase by 20 points
        winBonus = 20;
        user.score = user.score + winBonus;

        //update those to database

        nextRound();
    } else {
        ENEMY.HP = ENEMY.HP - user.attackpower

        //update new hp to database

        endTurn()
    }

    $(document).ready(function(){
        var userHealth = 100;
    
        var defend = Math.floor(Math.random() * 1) + 1;
    
        $("#defend").on("click", function(){
            userHealth -= defend;
            console.log(userHealth);
        })
    });
    
    

}