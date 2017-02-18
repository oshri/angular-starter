class QueryBuilderCtrl{
	constructor($scope){
		this.$scope = $scope;
	}

	$onInit(){

	}

	$onChanges(changes){

	}

	$onDestroy(){

	}
}

export default const queryBuilder = {
	templateUrl: 'queryBuilder.component.html',
  controller: QueryBuilderCtrl,
  bindings: {
    fieldValue: '<',
    onUpdate: '&'
  }
};
