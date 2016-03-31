var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
	date: {type: Date, default: Date.now},
	score: [{type: Number}],
	teamNames: [{type: String}],
	tournament: {type: Schema.Types.ObjectId, ref: 'Tournament'},
	loser: {type: Schema.Types.ObjectId, ref: "Team"},
	winner: {type: Schema.Types.ObjectId, ref: "Team"},
	status: {type: Boolean}
});

module.exports = mongoose.model('Game', GameSchema);