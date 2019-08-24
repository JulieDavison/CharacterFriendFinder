var charFriends = require('./app/data/friends.js');

module.exports = function (app) {
    // Gets the friends from the friends.js file and returns them in json format.
    app.get('/api/friends', function (req, res) {
        res.json(charFriends);

    });

    app.post('/api/friends', function (req, res) {
        var newCharFriendScore = req.body.scores;
        var closestScore = Infinity;
        var bestMatch = null;

        for (var i = 0; i < charFriends.length; i++) {
            var scoreDiff = 0;
            for (var d = 0; d < newCharFriendScore.length; d++) {
                scoreDiff += (Math.abs(parseInt(charFriends[i].scores[d]) - parseInt(newCharFriendScore[d])));
            }
            //right here
            console.log('score-diff', scoreDiff);
            console.log('closest score', closestScore);
            if(scoreDiff < closestScore){
                closestScore = scoreDiff;
                bestMatch = charFriends[i];
            }
        }

        var bcf = bestMatch;
        res.json(bcf);

        charFriends.push(req.body);
    });
};