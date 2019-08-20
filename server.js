// Dependencies
var express = require("express");
var path = require("path");
var charFriends = require('./app/data/friends.js');
// Setup Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app', 'public')));

// Routes
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'app', 'public', 'home.html'));  
});

app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, 'app', 'public', 'survey.html'));  
});

// app.get('/api/friends', function(req, res){
//      res.json(charFriends);
// });

// Gets the friends from the friends.js file and returns them in json format.
app.get('/api/friends', function (req, res) {
  res.json(charFriends);

});

app.post('/api/friends', function (req, res) {
  var newCharFriendScore = req.body.scores;
  console.log(req);

  var scoresArr = [];
  var bestMatch = 0;

  for (var i = 0; i < charFriends.length; i++) {
      var scoreDiff = 0;
      console.log(newCharFriendScore)

      for (var d = 0; d < newCharFriendScore.length; d++) {
          scoreDiff += (Math.abs(parseInt(charFriends[i].scores[d]) - parseInt(newCharFriendScore[d])));
      }
  }
  scoresArr.push(scoreDiff);


  for (var i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[bestMatch]){
          bestMatch = i;
      }
  }
  var bcf = charFriends[bestMatch];
  res.json(bcf);

  charFriends.push(req.body);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });