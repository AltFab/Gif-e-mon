require("dotenv").config();
// heroku requires "cool" dependency at the start
var cool = require('cool-ascii-faces')
var express = require("express");
var bodyParser = require("body-parser");

var db = require("./models");

var app = express();
// heroku requires to add a new route for /cool***
// express()
// .use(express.static(path.join(__dirname, 'public')))
// .set('views', path.join(__dirname, 'views'))
// .set('view engine', 'ejs')
// .get('/', (req, res) => res.render('pages/index'))
// .get('/cool', (req, res) => res.send(cool()))
// .listen(PORT, () => console.log(`Listening on ${ PORT }`))

var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
