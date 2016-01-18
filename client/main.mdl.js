import CoreCtrl from './core/scripts/controllers/core.ctrl.js';
import demoDir from './core/scripts/directives/demo.dir.js';


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
			.state('core', {
				url: '/core',
				templateUrl: 'core/views/state.core.tpl.html',
				controller: 'CoreCtrl as coCtrl'
			});

		$urlRouterProvider.otherwise(($injector, $location) => {
			$location.path('core');
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
	})
	.directive('demoDir',demoDir)
	.controller('CoreCtrl', CoreCtrl);