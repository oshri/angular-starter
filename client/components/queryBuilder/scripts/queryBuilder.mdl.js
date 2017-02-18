// import { queryBuilder } from './components/queryBuilder.component.js';


export default angular
	.module('queryBuilder',[])
	.config(() => {})
	// .component('queryBuilder', queryBuilder)
	.run(($rootScope, $httpBackend) => {
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
