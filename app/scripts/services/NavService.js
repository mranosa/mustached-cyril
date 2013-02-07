'use strict';

mustachedCyrilApp.factory('NavService', [ '$rootScope', function($rootScope) {
  
  var isNavHidden = true;
  var navitems = [
        {
          label: 'Inspection',
          cls: '',
          iconCls: 'icon-search',
          url: '#/inspection'
        },
        {
          label : 'Map',
          cls: '',
          iconCls: 'icon-map-marker',
          url: '#/map'
        },
        {
          label : 'Form',
          cls: '',
          iconCls: 'icon-edit',
          url: '#/form'
        },
        {
          label : 'History',
          cls: '',
          iconCls: 'icon-calendar',
          url: '#/history'
        },
        {
          label : 'Complaints',
          cls: '',
          iconCls: 'icon-legal',
          url: '#/complaints'
        },
        {
          label : 'Summary',
          cls: '',
          iconCls: 'icon-briefcase',
          url: '#/summary'
        }
      ];
  
  var NavService = function() {
    
  };

  NavService.prototype = {
    setNavitems: function(newNavitems){
        navitems = newNavitems;
    },
    getNavitems: function(){
		return navitems;
    },
    setActive: function(url){
    	for (var i = 0; i < navitems.length; i++) {
    		navitems[i].cls = '';

		    if(url === navitems[i].url){
		    	navitems[i].cls = 'active';
		    }
		  }
    },
    showNav: function(){
      isNavHidden = false;
      $rootScope.$broadcast('show_nav');
    },
    hideNav: function(){
      isNavHidden = true;
      $rootScope.$broadcast('hide_nav');
    },
    isNavHidden: function(){
      return isNavHidden;
    }
  };

  return new NavService();
}]);
