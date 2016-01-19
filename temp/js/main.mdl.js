(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/oshrikdoshim/projects/angular/angular-starter/client/core/scripts/controllers/core.ctrl.js":[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoreCtrl = function () {
	function CoreCtrl($scope, $log) {
		_classCallCheck(this, CoreCtrl);

		this.$scope = $scope;
		this.$log = $log;
		this.init();
	}

	_createClass(CoreCtrl, [{
		key: "init",
		value: function init() {
			this.$log.debug("Hi i am log from CoreCtrl.");
		}
	}]);

	return CoreCtrl;
}();

exports.default = CoreCtrl;

},{}],"/Users/oshrikdoshim/projects/angular/angular-starter/client/core/scripts/directives/demo.dir.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = demoDir;
function demoDir(CONFIG) {
	return {
		restrict: 'AE',
		templateUrl: 'demoDir.tpl.html',
		link: function link(scope) {
			scope.directiveName = 'Demo Directive';
		}
	};
}

},{}],"/Users/oshrikdoshim/projects/angular/angular-starter/client/main.mdl.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _coreCtrl = require('./core/scripts/controllers/core.ctrl.js');

var _coreCtrl2 = _interopRequireDefault(_coreCtrl);

var _demoDir = require('./core/scripts/directives/demo.dir.js');

var _demoDir2 = _interopRequireDefault(_demoDir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('core', ['ngAnimate', 'ngSanitize', 'ui.router']).constant('CONFIG', {
	views: 'core/views/'
}).config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "$httpProvider", "CONFIG", function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, CONFIG) {

	$stateProvider.state('core', {
		url: '/core',
		templateUrl: 'state.core.tpl.html',
		controller: 'CoreCtrl as coCtrl'
	});

	$urlRouterProvider.otherwise(function ($injector, $location) {
		$location.path('core');
	});

	$locationProvider.html5Mode(true);
}]).run(["$rootScope", function ($rootScope) {
	$rootScope.safeApply = function (fn) {
		var phase = this.$root.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && typeof fn === 'function') {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};
}]).directive('demoDir', _demoDir2.default).controller('CoreCtrl', _coreCtrl2.default);

},{"./core/scripts/controllers/core.ctrl.js":"/Users/oshrikdoshim/projects/angular/angular-starter/client/core/scripts/controllers/core.ctrl.js","./core/scripts/directives/demo.dir.js":"/Users/oshrikdoshim/projects/angular/angular-starter/client/core/scripts/directives/demo.dir.js"}]},{},["/Users/oshrikdoshim/projects/angular/angular-starter/client/main.mdl.js"])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvY29yZS9zY3JpcHRzL2NvbnRyb2xsZXJzL2NvcmUuY3RybC5qcyIsImNsaWVudC9jb3JlL3NjcmlwdHMvZGlyZWN0aXZlcy9kZW1vLmRpci5qcyIsImNsaWVudC9tYWluLm1kbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksZUFBZSxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWhpQixPQUFPLGVBQWUsU0FBUyxjQUFjO0NBQzVDLE9BQU87OztBQUdSLFNBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxJQVZxQixXQUFRLFlBQUE7Q0FFNUIsU0FGb0IsU0FFUixRQUFRLE1BQUs7RUFVeEIsZ0JBQWdCLE1BWkc7O0VBR25CLEtBQUssU0FBUztFQUNkLEtBQUssT0FBTztFQUNaLEtBQUs7OztDQWNOLGFBbkJvQixVQUFRLENBQUE7RUFvQjNCLEtBQUs7RUFDTCxPQUFPLFNBQVMsT0FiWDtHQUNMLEtBQUssS0FBSyxNQUFNOzs7O0NBaUJqQixPQTFCb0I7OztBQTZCckIsUUFBUSxVQTdCYTs4MUJBOEJ5MEI7O0FDOUI5MUI7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztDQUM1QyxPQUFPOztBQUVSLFFBQVEsVUFMZ0I7QUFBVCxTQUFTLFFBQVEsUUFBTztDQUN0QyxPQUFPO0VBQ04sVUFBVTtFQUNWLGFBQWE7RUFDYixNQUFNLFNBQUEsS0FBQyxPQUFVO0dBQ2hCLE1BQU0sZ0JBQWdCOzs7O3NzQkFVNnFCOztBQ2Z0c0I7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztDQUM1QyxPQUFPOzs7QUFHUixJQUFJLFlBQVksUUFBUTs7QUFFeEIsSUFBSSxhQUFhLHVCQUF1Qjs7QUFFeEMsSUFBSSxXQUFXLFFBQVE7O0FBRXZCLElBQUksWUFBWSx1QkFBdUI7O0FBRXZDLFNBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQUV2RixRQUFRLFVBWk8sUUFDYixPQUFPLFFBQU8sQ0FDZCxhQUNBLGNBQ0EsY0FFQSxTQUFTLFVBQVU7Q0FDbkIsT0FBTztHQUVQLGdHQUFPLFVBQUMsZ0JBQWdCLG1CQUFtQixvQkFBb0IsZUFBZSxRQUFXOztDQUV6RixlQUNFLE1BQU0sUUFBUTtFQUNkLEtBQUs7RUFDTCxhQUFhO0VBQ2IsWUFBWTs7O0NBR2QsbUJBQW1CLFVBQVUsVUFBQyxXQUFXLFdBQWM7RUFDdEQsVUFBVSxLQUFLOzs7Q0FHaEIsa0JBQWtCLFVBQVU7SUFFNUIsbUJBQUksVUFBQyxZQUFlO0NBQ3BCLFdBQVcsWUFBWSxVQUFTLElBQUk7RUFDbkMsSUFBSSxRQUFRLEtBQUssTUFBTTtFQUN2QixJQUFJLFVBQVUsWUFBWSxVQUFVLFdBQVc7R0FDOUMsSUFBSSxNQUFPLE9BQU8sT0FBUSxZQUFhO0lBQ3RDOztTQUVLO0dBQ04sS0FBSyxPQUFPOzs7SUFJZCxVQUFVLFdBQVMsVUFBQSxTQUNuQixXQUFXLFlBQVUsV0FBQTtzd0ZBRSt1RiIsImZpbGUiOiJtYWluLm1kbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZUN0cmwge1xuXG5cdGNvbnN0cnVjdG9yKCRzY29wZSwgJGxvZyl7XG5cdFx0dGhpcy4kc2NvcGUgPSAkc2NvcGU7XG5cdFx0dGhpcy4kbG9nID0gJGxvZztcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdGluaXQoKXtcblx0XHR0aGlzLiRsb2cuZGVidWcoXCJIaSBpIGFtIGxvZyBmcm9tIENvcmVDdHJsLlwiKTtcblx0fVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbW9EaXIoQ09ORklHKXtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0FFJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2RlbW9EaXIudHBsLmh0bWwnLFxuXHRcdGxpbms6IChzY29wZSkgPT4ge1xuXHRcdFx0c2NvcGUuZGlyZWN0aXZlTmFtZSA9ICdEZW1vIERpcmVjdGl2ZSc7XG5cdFx0fVxuXHR9O1xufSIsImltcG9ydCBDb3JlQ3RybCBmcm9tICcuL2NvcmUvc2NyaXB0cy9jb250cm9sbGVycy9jb3JlLmN0cmwuanMnO1xuaW1wb3J0IGRlbW9EaXIgZnJvbSAnLi9jb3JlL3NjcmlwdHMvZGlyZWN0aXZlcy9kZW1vLmRpci5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxuXHQubW9kdWxlKCdjb3JlJyxbXG5cdFx0J25nQW5pbWF0ZScsXG5cdFx0J25nU2FuaXRpemUnLFxuXHRcdCd1aS5yb3V0ZXInXG5cdF0pXG5cdC5jb25zdGFudCgnQ09ORklHJywge1xuXHRcdHZpZXdzOiAnY29yZS92aWV3cy8nXG5cdH0pXG5cdC5jb25maWcoKCRzdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyLCBDT05GSUcpID0+IHtcblxuXHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHQuc3RhdGUoJ2NvcmUnLCB7XG5cdFx0XHRcdHVybDogJy9jb3JlJyxcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdzdGF0ZS5jb3JlLnRwbC5odG1sJyxcblx0XHRcdFx0Y29udHJvbGxlcjogJ0NvcmVDdHJsIGFzIGNvQ3RybCdcblx0XHRcdH0pO1xuXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgoJGluamVjdG9yLCAkbG9jYXRpb24pID0+IHtcblx0XHRcdCRsb2NhdGlvbi5wYXRoKCdjb3JlJyk7XG5cdFx0fSk7XG5cblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cdH0pXG5cdC5ydW4oKCRyb290U2NvcGUpID0+IHtcblx0XHQkcm9vdFNjb3BlLnNhZmVBcHBseSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHR2YXIgcGhhc2UgPSB0aGlzLiRyb290LiQkcGhhc2U7XG5cdFx0XHRpZiAocGhhc2UgPT09ICckYXBwbHknIHx8IHBoYXNlID09PSAnJGRpZ2VzdCcpIHtcblx0XHRcdFx0aWYgKGZuICYmICh0eXBlb2YoZm4pID09PSAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRcdGZuKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGFwcGx5KGZuKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KVxuXHQuZGlyZWN0aXZlKCdkZW1vRGlyJyxkZW1vRGlyKVxuXHQuY29udHJvbGxlcignQ29yZUN0cmwnLCBDb3JlQ3RybCk7Il19
