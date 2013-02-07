'use strict';

mustachedCyrilApp.controller('ComplaintsCtrl', ['$scope', 'NavService',
	function($scope, NavService) {

  function init(){
  	if(NavService.isNavHidden()){
  		NavService.showNav();	
  	}

  	NavService.setActive('#/complaints');
  }

  init();

}]);
