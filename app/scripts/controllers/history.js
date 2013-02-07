'use strict';

mustachedCyrilApp.controller('HistoryCtrl', ['$scope', 'NavService',
	function($scope, NavService) {
  
  function init(){
  	if(NavService.isNavHidden()){
  		NavService.showNav();	
  	}

  	NavService.setActive('#/history');
  }

  init();

}]);
