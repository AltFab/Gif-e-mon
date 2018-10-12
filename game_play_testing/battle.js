var playerHealth = 100;
var enemyHealth = 100;
$(document).ready(function() {
  document.getElementById("playerHealth").innerHTML = "Health: " + playerHealth + "/100";
  document.getElementById("enemyHealth").innerHTML = "Health: " + enemyHealth + "/100";

  $("#battle-log").hide();

  $("#attack").click(function() {
    var crit = Math.floor((Math.random() * 100) + 1);

    if (crit >= 95) {
      var critDamage = Math.floor((Math.random() * 12) + 4);

      $("#battle-log").empty().append("Critical Stike! You hit for " + critDamage + " damage!");
      enemyHealth -= critDamage;
      document.getElementById("enemyHealth").innerHTML = "Health: " + enemyHealth + "/100";
    }
    else {
      var damage = Math.floor((Math.random() * 6) + 2);

      $("#battle-log").empty().append("You hit for " + damage + " damage!");
      enemyHealth -= damage;
      document.getElementById("enemyHealth").innerHTML = "Health: " + enemyHealth + "/100";
    }

    enemyAttack();
    gameOver();

  }); //end attack

  $("#defend").click(function() {
    var dodge = Math.floor((Math.random() * 100) + 1);
    console.log("dodgeChance " + dodge);
    if (dodge >= 45) {
      $("#battle-log").empty().append("Successful evasion!");
      $("#battle-log").empty();
    } else {
      var enemyAttack = Math.floor((Math.random() * 8) + 2);
      console.log("dodge enemyAttack " + enemyAttack);
      $("#battle-log").empty().append("You attempt to evade but failed. You are hit for " + enemyAttack + " damage!");
      $("#battle-log").empty();
      playerHealth -= enemyAttack;
      document.getElementById("playerHealth").innerHTML = "Health: " + playerHealth + "/100";

      gameOver();
    }
  }); //end defend

  $("#healthPot").one("click", function() {
    var recover = Math.floor((Math.random() * 10) + 5);
    console.log("recover " + recover);
    $("#battle-log").empty().append("You drink your health potion and recover " + recover + " health!");
    $("#battle-log").empty();
    playerHealth += recover;
    if (playerHealth > 100) {
      playerHealth = 100;
    }
    document.getElementById("playerHealth").innerHTML = "Health: " + playerHealth + "/100";
    $("#healthPot").addClass("disabled");
  }); //end healthPot

  $("#restart").click(function() {
    window.location.reload();
  }); //end reload

  function gameOver() {
    if (playerHealth <= 0) {
      $("#battle-log").empty().append("You Lose! Game Over!");
      $("#attackButton,#defenseButton,#potionButton").hide();
      $("#battle-log").show();
    } else if (enemyHealth <= 0) {
      $("#battle-log").empty().append("Congratulations! You Win!");
      $("#attackButton,#defenseButton,#potionButton").hide();
      $("#battle-log").show();
    }
  }; //end gameOver

  function enemyAttack() { //enemy attacking function
    var enemyAttack = Math.floor((Math.random() * 8) + 2);
    console.log("enemyAttack " + enemyAttack);

    $("#battle-log").empty().append("The enemy hits for " + enemyAttack + " damage!");
    playerHealth -= enemyAttack;
    document.getElementById("playerHealth").innerHTML = "Health: " + playerHealth + "/100";
  }; //end enemyAttack

});