angular.module('tournamentCreatorApp', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/homeTemplate.html',
				controller: 'homeCtrl'
			})
			.state('tournament', {
				url: '/tournament',
				templateUrl: '../views/tournamentTemplate.html',
				controller: 'tournamentCtrl'
			})
			.state('create', {
				url: '/createTournament',
				templateUrl: '../views/createTournamentTemplate.html',
				controller: 'createCtrl'
			})
			
		$urlRouterProvider.otherwise('/');
	})