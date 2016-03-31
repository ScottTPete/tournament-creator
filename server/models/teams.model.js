var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
	name: {type: String},
	members: [{type: String}],
	dateCreated: {type: Date, default: Date.now}
	
})






module.exports = mongoose.model('Team', TeamSchema);