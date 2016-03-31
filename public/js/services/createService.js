angular.module('tournamentCreatorApp')
	.service('createService', function($http, $q) {
		
	
		this.saveTeam = function(team) {
			var deferred = $q.defer();
			$http ({
				method: 'POST',
				url: '/api/teams',
				dataType: 'json',
				data: team
			}).then(function(response) {
				deferred.resolve(response.data);
			})
			return deferred.promise;
		};








})