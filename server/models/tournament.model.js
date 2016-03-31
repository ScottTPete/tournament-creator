var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TournamentSchema = new Schema({
	teams: {type: Schema.Types.ObjectId, ref: 'Team'},
	status: {type: Boolean},
	tournamentName: {type: String},
	dateCreated: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Tournament', TournamentSchema);