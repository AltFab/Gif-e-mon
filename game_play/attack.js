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



}