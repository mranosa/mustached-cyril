'use strict';

mustachedCyrilApp.controller('SummaryCtrl', ['$scope', 'NavService',
	function($scope, NavService) {
  
  function init(){
  	if(NavService.isNavHidden()){
  		NavService.showNav();	
  	}

  	NavService.setActive('#/summary');
  }

  init();

}]);
