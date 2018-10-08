// enemy turn starts when user clicks end turn, attack, or potion button and it resolves 
// $(document).ready(function(){

// // enemy acts out turn according to probability ==> 0-49 === defends, 50-100 === attacks,
// function enemyAction() {
// // this gives probably of choosing an act atk or def
//     var enemyAct = Math.floor((Math.random() * 100) + 1);
//     console.log(enemyAct);
// // if enemyAct is greater than or equal to 50, enemy attacks
//     if (enemyAct >= 50) {
//         // creating variable for enemy attack points from enemySeed
//         var enemyAttack = enemy_attack;
//         // create enemy attack chance against user
//         var enemyAttack = Math.floor((Math.random() * 100) + 1);
//         // enemy hits when is random roll is 85 or higher
//         if (enemyAttack >= 85) {
//             $("#battlelog").empty().append("You've been hit for " + enemy_attack + "damage!");
//             health -= enemy_attack;
//             $("#userHP").innerHTML = "Health: " + health;
//         }
//         else if (enemyAttack <= 84) {
//             $("battlelog").empty().append("Enemy attack missed!");

//         }
//     else if(enemyAct <= 50) {

//         var enemyBlock = 1;
//         $("battleog").empty().append("Enemy prepares for your attack!");

//         attack -= enemyBlock;
//             }
//         }}})