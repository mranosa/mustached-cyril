'use strict';

mustachedCyrilApp.controller('InspectionCtrl', ['$scope', 'NavService',
	function($scope, NavService) {
  
  function init(){
  	if(NavService.isNavHidden()){
  		NavService.showNav();	
  	}

  	NavService.setActive('#/inspection');
  }

  init();
}]);
