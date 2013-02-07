'use strict';

mustachedCyrilApp.controller('FormCtrl', ['$scope', 'NavService',
	function($scope, NavService) {
  
  function init(){
  	if(NavService.isNavHidden()){
  		NavService.showNav();	
  	}

  	NavService.setActive('#/form');
  }

  init();

}]);
