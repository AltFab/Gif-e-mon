$(document).ready(function(){
    var userHealth = 100;

    var defend = Math.floor(Math.random() * 1) + 1;

    $("#defend").on("click", function(){
        userHealth -= defend;
        console.log(userHealth);
    })
});

