// Dependencies
var express = require("express");
// var path = require("path");
// var charFriends = require('./app/data/friends');
// Setup Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app', 'public')));

// Routes
// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, 'app', 'public', 'home.html'));  
// });

// app.get('/survey', function(req, res){
//     res.sendFile(path.join(__dirname, 'app', 'public', 'survey.html'));  
// });

// app.get('/api/friends', function(req, res){
//      res.json(charFriends);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });