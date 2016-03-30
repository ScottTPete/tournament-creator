var Tournament = require('../models/tournament.model.js');
var Games = require('../models/games.model.js');

module.exports = {
	
	
	//Touranment Endpoints//
	postTournament: function(req, res, next) {
		console.log('Post tournaments to db');
		Tournament.save(function (err, resp) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.status(200).json(resp);
			}
		})
		
	},
	getTournaments: function(req, res, next) {
		
	},
	
	//Games Endpoints//
	postGame: function(req, res, next) {
		console.log('Post game to db');
		var game = new Games(req.body);
		console.log(req.body);
		game.save(function(err, resp) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.status(200).json(resp);
			}
		})
	}
	
	
	
	
	
};