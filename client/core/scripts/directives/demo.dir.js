export default function demoDir(CONFIG){
	return {
		restrict: 'AE',
		templateUrl: CONFIG.views + 'demoDir.tpl.html',
		link: (scope) => {
			scope.directiveName = 'Demo Directive';
		}
	};
}