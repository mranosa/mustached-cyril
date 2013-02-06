'use strict';

mustachedCyrilApp.factory('StringValidator', function() {
  return {
    isEmpty: function(str) {
        return (!str || 0 === str.length);
    },
    isBlank: function(str) {
        return (!str || /^\s*$/.test(str));
    }
  };
});
