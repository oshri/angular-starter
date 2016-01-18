export default class CoreCtrl {

	constructor($scope, $log){
		this.$scope = $scope;
		this.$log = $log;
		this.init();
	}

	init(){
		this.$log.debug("Hi i am log from CoreCtrl.");
	}
}