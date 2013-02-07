'use strict';

mustachedCyrilApp.controller('MapCtrl', ['$scope', 'NavService',
	function($scope, NavService) {

  function init(){
  	if(NavService.isNavHidden()){
  		NavService.showNav();	
  	}

  	NavService.setActive('#/map');
  }

  init();

}]);
