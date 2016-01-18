
export default angular
	.module('core',[
		'ngAnimate',
		'ngSanitize',
		'ui.router'
	])
	.constant('CONFIG', {
		views: 'core/views/'
	})
	.config(($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, CONFIG) => {

		$stateProvider
			.state('welcome', {
				url: '/welcome',
				templateUrl: CONFIG + 'state.welcome.tpl.html',
				controller: 'WelcomeCtrl as weCtrl'
			});

		$urlRouterProvider.otherwise(($injector, $location) => {
			$location.path('/');
		});

		$locationProvider.html5Mode(true);
	})
	.run(($rootScope) => {
		$rootScope.safeApply = function(fn) {
			var phase = this.$root.$$phase;
			if (phase === '$apply' || phase === '$digest') {
				if (fn && (typeof(fn) === 'function')) {
					fn();
				}
			} else {
				this.$apply(fn);
			}
		};
	});