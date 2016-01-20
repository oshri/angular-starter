'use strict';

describe('Controller: CoreCtrl', function() {

	// load the controller's module
	beforeEach(angular.mock.module('core'));

	var CoreCtrl,
		scope;

	// Initialize the controller
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();

		CoreCtrl = $controller('CoreCtrl', {$scope:scope});
	}));

	it('should be defined', function() {
		expect(CoreCtrl).toBeDefined();
	});

	it('should 1 be 2', function(){
		expect(1).toBe(1);
	});
});
