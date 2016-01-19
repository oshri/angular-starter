export default function demoDir(CONFIG){
	return {
		restrict: 'AE',
		templateUrl: 'demoDir.tpl.html',
		link: (scope) => {
			scope.directiveName = 'Demo Directive';
		}
	};
}