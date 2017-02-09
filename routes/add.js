var data = require("../data.json");

exports.addFriend = function(req, res) {
	var name = req.param('name');
  var description = req.param('description');
	
	var newFriend = 
		{
		 "name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people"
		}

	data.friends.push(newFriend);
	console.log(newFriend);
}