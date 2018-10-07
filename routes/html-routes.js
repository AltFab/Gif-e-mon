// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // home.html route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //game.html route
  app.get("/game", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/game.html"));
  });

  // score.html route
  app.get("/scoreboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/score.html"));
  });

};
