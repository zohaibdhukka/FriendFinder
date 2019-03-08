var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        // friends.push(req.body);
        var newFriend =
        {
            name: req.body.name,
            photo: req.body.photo,
            scores: JSON.parse(req.body.scores)
        }

        var newArray = [];

        friends.forEach(function(item, index) {
            var difference = 0;
            for (var i = 0; i < item.scores.length; i++) {
                difference += Math.abs(item.scores[i] - newFriend.scores[i]);
            }
            newArray.push({ "difference": difference, "index": index });
        });

        newArray.sort(function(a, b) {
            return a.difference - b.difference;
        });

        friends.push(newFriend);
        res.json(friends[newArray[0].index]);

    });

}