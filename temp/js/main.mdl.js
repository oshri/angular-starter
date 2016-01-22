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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvY29yZS9zY3JpcHRzL2NvbnRyb2xsZXJzL2NvcmUuY3RybC5qcyIsImNsaWVudC9jb3JlL3NjcmlwdHMvZGlyZWN0aXZlcy9kZW1vLmRpci5qcyIsImNsaWVudC9tYWluLm1kbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksZUFBZSxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWhpQixPQUFPLGVBQWUsU0FBUyxjQUFjO0NBQzVDLE9BQU87OztBQUdSLFNBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxJQVZxQixXQUFBLFlBQUE7Q0FFcEIsU0FGb0IsU0FFUixRQUFRLE1BQUs7RUFVeEIsZ0JBQWdCLE1BWkc7O0VBR25CLEtBQUssU0FBUztFQUNkLEtBQUssT0FBTztFQUNaLEtBQUs7OztDQWNOLGFBbkJvQixVQUFBLENBQUE7RUFvQm5CLEtBQUs7RUFDTCxPQUFPLFNBQVMsT0FiWDtHQUNMLEtBQUssS0FBSyxNQUFNOzs7O0NBaUJqQixPQTFCb0I7OztBQTZCckIsUUFBUSxVQUFVO2t4QkFDZ3dCOztBQzlCbHhCOztBQUVBLE9BQU8sZUFBZSxTQUFTLGNBQWM7Q0FDNUMsT0FBTzs7QUFFUixRQUFRLFVBTGdCO0FBQVQsU0FBUyxRQUFRLFFBQU87Q0FDdEMsT0FBTztFQUNOLFVBQVU7RUFDVixhQUFhO0VBQ2IsTUFBTSxTQUFBLEtBQUMsT0FBVTtHQUNoQixNQUFNLGdCQUFnQjs7OzswcUJBVWlwQjs7QUNmMXFCOztBQUVBLE9BQU8sZUFBZSxTQUFTLGNBQWM7Q0FDNUMsT0FBTzs7O0FBR1IsSUFBSSxZQUFZLFFBQVE7O0FBRXhCLElBQUksYUFBYSx1QkFBdUI7O0FBRXhDLElBQUksV0FBVyxRQUFROztBQUV2QixJQUFJLFlBQVksdUJBQXVCOztBQUV2QyxTQUFTLHVCQUF1QixLQUFLLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUzs7QUFFdkYsUUFBUSxVQVpPLFFBQ2IsT0FBTyxRQUFPLENBQ2QsYUFDQSxjQUNBLGNBRUEsU0FBUyxVQUFVO0NBQ25CLE9BQU87R0FFUCxnR0FBTyxVQUFDLGdCQUFnQixtQkFBbUIsb0JBQW9CLGVBQWUsUUFBVzs7Q0FFekYsZUFDRSxNQUFNLFFBQVE7RUFDZCxLQUFLO0VBQ0wsYUFBYTtFQUNiLFlBQVk7OztDQUdkLG1CQUFtQixVQUFVLFVBQUMsV0FBVyxXQUFjO0VBQ3RELFVBQVUsS0FBSzs7O0NBR2hCLGtCQUFrQixVQUFVO0lBRTVCLG1CQUFJLFVBQUMsWUFBZTtDQUNwQixXQUFXLFlBQVksVUFBUyxJQUFJO0VBQ25DLElBQUksUUFBUSxLQUFLLE1BQU07RUFDdkIsSUFBSSxVQUFVLFlBQVksVUFBVSxXQUFXO0dBQzlDLElBQUksTUFBTyxPQUFPLE9BQVEsWUFBYTtJQUN0Qzs7U0FFSztHQUNOLEtBQUssT0FBTzs7O0lBSWQsVUFBVSxXQXBDRyxVQUFBLFNBcUNiLFdBQVcsWUFyQ0UsV0FBQTswbkZBdUMybUYiLCJmaWxlIjoibWFpbi5tZGwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmVDdHJsIHtcblxuXHRjb25zdHJ1Y3Rvcigkc2NvcGUsICRsb2cpe1xuXHRcdHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuXHRcdHRoaXMuJGxvZyA9ICRsb2c7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCl7XG5cdFx0dGhpcy4kbG9nLmRlYnVnKFwiSGkgaSBhbSBsb2cgZnJvbSBDb3JlQ3RybC5cIik7XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZW1vRGlyKENPTkZJRyl7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdBRScsXG5cdFx0dGVtcGxhdGVVcmw6ICdkZW1vRGlyLnRwbC5odG1sJyxcblx0XHRsaW5rOiAoc2NvcGUpID0+IHtcblx0XHRcdHNjb3BlLmRpcmVjdGl2ZU5hbWUgPSAnRGVtbyBEaXJlY3RpdmUnO1xuXHRcdH1cblx0fTtcbn0iLCJpbXBvcnQgQ29yZUN0cmwgZnJvbSAnLi9jb3JlL3NjcmlwdHMvY29udHJvbGxlcnMvY29yZS5jdHJsLmpzJztcbmltcG9ydCBkZW1vRGlyIGZyb20gJy4vY29yZS9zY3JpcHRzL2RpcmVjdGl2ZXMvZGVtby5kaXIuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXJcblx0Lm1vZHVsZSgnY29yZScsW1xuXHRcdCduZ0FuaW1hdGUnLFxuXHRcdCduZ1Nhbml0aXplJyxcblx0XHQndWkucm91dGVyJ1xuXHRdKVxuXHQuY29uc3RhbnQoJ0NPTkZJRycsIHtcblx0XHR2aWV3czogJ2NvcmUvdmlld3MvJ1xuXHR9KVxuXHQuY29uZmlnKCgkc3RhdGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGh0dHBQcm92aWRlciwgQ09ORklHKSA9PiB7XG5cblx0XHQkc3RhdGVQcm92aWRlclxuXHRcdFx0LnN0YXRlKCdjb3JlJywge1xuXHRcdFx0XHR1cmw6ICcvY29yZScsXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnc3RhdGUuY29yZS50cGwuaHRtbCcsXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdDb3JlQ3RybCBhcyBjb0N0cmwnXG5cdFx0XHR9KTtcblxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoKCRpbmplY3RvciwgJGxvY2F0aW9uKSA9PiB7XG5cdFx0XHQkbG9jYXRpb24ucGF0aCgnY29yZScpO1xuXHRcdH0pO1xuXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXHR9KVxuXHQucnVuKCgkcm9vdFNjb3BlKSA9PiB7XG5cdFx0JHJvb3RTY29wZS5zYWZlQXBwbHkgPSBmdW5jdGlvbihmbikge1xuXHRcdFx0dmFyIHBoYXNlID0gdGhpcy4kcm9vdC4kJHBoYXNlO1xuXHRcdFx0aWYgKHBoYXNlID09PSAnJGFwcGx5JyB8fCBwaGFzZSA9PT0gJyRkaWdlc3QnKSB7XG5cdFx0XHRcdGlmIChmbiAmJiAodHlwZW9mKGZuKSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0XHRmbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRhcHBseShmbik7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSlcblx0LmRpcmVjdGl2ZSgnZGVtb0RpcicsZGVtb0Rpcilcblx0LmNvbnRyb2xsZXIoJ0NvcmVDdHJsJywgQ29yZUN0cmwpOyJdfQ==
