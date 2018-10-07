// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.userToon.findAll({})
      .then(function(results) {
        res.json(results);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.userToon.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(results) {
        res.json(results);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/users/:id", function(req, res) {
    db.userToon.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(results) {
        res.json(results);
      });
  });

  // POST route for saving a new post
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.userToon.create({
      user_name: req.body.user_name,
      gif_link: req.body.gif_link,
      health: req.body.health,
      attack: req.body.attack,
      potion: req.body.potion
    })
      .then(function(results) {
        res.json(results);
      });
  });

  // DELETE route for deleting users
  //app.delete("/api/users/:id", function(req, res) {
    //db.Post.destroy({
      //where: {
        //id: req.params.id
      //}
    //})
      //.then(function(results) {
        //res.json(results);
      //});
  //});

  // PUT route for updating users
  app.put("/api/users", function(req, res) {
    db.Post.update(req.body,
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
