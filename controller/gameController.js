var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var userToon = require("../models/userToon.js");
var enemyToon = require("../models/enemyToon.js");

router.get("/", function(req, res){
    // do i need this for home.html?


})

//POST
router.post("/api/game", function(req, res){
    userToon.create([
        "user_name", "gif_name", "gif_link"
    ],[
        req.body.user_name, req.body.gif_name, req.body.gif_link
    ], function(results){
        res.json({id: result.insertId});
    });
});
//UPDATE - need to check if this is what we need or how to update.
router.put("/api/game/:????", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    userToon.update({
      health: req.body.health,
      attack: req.body.attack,
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router;