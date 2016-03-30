var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
	date: {type: Date, default: Date.now},
	score: [{
		points: {type: Number}
	}],
	result: {type: String},
	teamNames: [{
		name: {type: String}	
	}]
})

module.exports = mongoose.model('Game', GameSchema);