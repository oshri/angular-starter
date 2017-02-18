import CoreCtrl 		from './core/scripts/controllers/core.ctrl.js';
import demoDir 			from './core/scripts/directives/demo.dir.js';
import queryBuilder from './components/queryBuilder/scripts/queryBuilder.mdl.js';


export default angular
	.module('core',[
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'rx',
		queryBuilder.name
	])
	.constant('CONFIG', {
		views: 'core/views/'
	})
	.config(($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, CONFIG) => {

		$stateProvider
			.state('core', {
				url: '/core',
				templateUrl: 'state.core.tpl.html',
				controller: 'CoreCtrl as coCtrl'
			});

		$urlRouterProvider.otherwise(($injector, $location) => {
			$location.path('core');
		});

		$locationProvider.html5Mode(true);
	})
	.run(($rootScope, $httpBackend) => {

		var phones = [{name: 'phone1'}, {name: 'phone2'}];

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
