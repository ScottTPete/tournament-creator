var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TournamentSchema = new Schema({
	gamesPlayed: {type: Schema.Types.ObjectId, ref: 'Game'},
	teams: {
		teamNames: [{type: String, required: true}],
		teamMembers: [{type: String, required: true}]
	},
	status: String,
	tournamentName: String
	
})

module.exports = mongoose.model('Tournament', TournamentSchema);