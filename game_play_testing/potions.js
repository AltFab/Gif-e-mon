//Use potion when enemy gets HP level of 30%
//Potion will increase HP level by 70%

function potions(){
    var potion = Math.floor(7/enemy_hp * 100);

    if (enemy_hp <= 3/enemy_hp * 100) {

        $("#battelog").empty().append("Enemy healed " + potion + "of Health!");
        enemy_hp += potion;
        $("#enemyHP").innerHTML = "Enemy HP: " + enemy_hp;
    };
};