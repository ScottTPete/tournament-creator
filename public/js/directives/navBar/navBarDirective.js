angular.module('tournamentCreatorApp')
	.directive('navBarDirective', function() {
		return {
			restrict: 'E',
			templateUrl: './js/directives/navBar/navbarTemplate.html'
		}
	})