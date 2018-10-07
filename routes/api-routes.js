// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all users
  app.get("/api/allUsers/", function(req, res){
    db.userToon.findAll({})
      .then(function(results){
        res.json(results);
      });
  });

  // GET route for getting one user
  app.get("/api/allUsers/:id", function(req, res) {
    db.userToon.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(results) {
        res.json(results);
      });
  });

    // GET route for getting all enemies
    app.get("/api/allEnemies/", function(req, res){
      db.enemyToon.findAll({})
        .then(function(results){
          res.json(results);
        });
    });
  
    // GET route for getting one enemy
    app.get("/api/allEnemies/:id", function(req, res) {
      db.enemyToon.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(results) {
          res.json(results);
        });
    });

  // POST route for saving a new post
  app.post("/api/newUser", function(req, res) {
    console.log(req.body);
    db.userToon.create({
      user_name: req.body.user_name,
      score: req.body.score,
      gif_link: req.body.gif_link,
      health: req.body.health,
      attack: req.body.attack,
      potion: req.body.potion,
      buildPicked: req.body.buildPicked,
      levelDone: req.body.levelDone
    })
      .then(function(results) {
        res.json(results);
      });
  });

  // PUT route for updating post
  app.put("/api/updateUser", function(req, res) {
    db.userToon.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(results) {
        res.json(results);
      });
  });
};

