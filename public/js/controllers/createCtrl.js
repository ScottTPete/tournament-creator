angular.module('tournamentCreatorApp')
	.controller('createCtrl', function($scope, createService, $timeout) {
	
	//CREATE TOURNAMENT//
//	$scope.tournament = {
//		tournamentName: ''
//	};
//	
//	$scope.saveTournamentName = function() {
//		$scope.tournament.tournamentName = $scope.tempTournament;
//		console.log($scope.tournament);
//		$scope.tempTournament = '';
//	}
	
	

	
	
	
	//CREATE TEAM//
	$scope.team = {
		name: '',
		members: []
	};
	
	$scope.saveTeamName = function() {
		$scope.team.name = $scope.tempTeam;
		console.log($scope.team);
		$scope.tempTeam= "";
	}
	
	$scope.saveTeamMember = function() {
		$scope.team.members.push($scope.tempMember);
		console.log($scope.team);
		$scope.tempMember = '';
	}
	
	$scope.saveTeam = function() {
		createService.saveTeam($scope.team).then(function(response) {
			$scope.teamData = response;
			console.log($scope.teamData);
			$scope.successNotice = true;
			$scope.showTeam = true;
			$scope.team = {};
			
			$timeout(function () {
				$scope.successNotice = false;
			}, 2000)
		})
	}
	
	
	

})