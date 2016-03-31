var Tournament = require('../models/tournament.model.js');
var Games = require('../models/games.model.js');
var Team = require('../models/teams.model.js');

module.exports = {
	
	
	//Touranment Endpoints//
	postTournament: function(req, res, next) {
		console.log('Post tournaments to db');
		var tournament = new Tournament(req.body);
		tournament.save(function (err, resp) {
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
		game.save(function(err, resp) {
			if(err) {
				res.status(500).send(err);
			} else {
				res.status(200).json(resp);
			}
		})
	},
	getGame: function(req, res, next) {
		console.log("Get game from db");
		Games.findById()
	},
	
	
	//Team Endpoints//
	postTeam: function(req, res, next) {
		console.log("Post team to db");
		console.log(req.body);
		var team = new Team(req.body);
		team.save(function (err, resp) {
			console.log(resp);
			if(err) {
				res.status(500).send(err);
			} else {
				res.status(200).json(resp);
			}
		})
	}
	
	
	
	
	
};