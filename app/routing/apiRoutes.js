var charFriends = require('./app/data/friends');

module.exports = function (app) {
    // Gets the friends from the friends.js file and returns them in json format.
    app.get('/api/friends', function (req, res) {
        res.json(charFriends);

    });

    app.post('/api/friends', function (req, res) {
        var newCharFriendScore = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;

        for (var i = 0; i < charFriends.length; i++) {
            var scoreDiff = 0;
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
};