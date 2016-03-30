angular.module('tournamentCreatorApp')
	.controller('homeCtrl', function($scope, $state) {

	$scope.goToCreateTournament = function() {
		$state.go('create');
	}

})