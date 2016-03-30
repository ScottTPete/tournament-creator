var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var mainCtrl = require('./server/controllers/mainCtrl.js');


var app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname +'/public'));

//MONGOOSE//
var mongoUri = 'mongodb://admin:admin@ds011870.mlab.com:11870/tournament-creator';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connection to mongoDB successful!')
})




//TOURNAMENT ENDPOINTS//
app.post('/api/tournament', mainCtrl.postTournament);
app.get('/api/tournament', mainCtrl.getTournaments);

//GAMES ENDPOINTS//
app.post('/api/games', mainCtrl.postGame);


//PORT//
var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("We're good to go on port: " + port + "!");
})