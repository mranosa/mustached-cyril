'use strict';

mustachedCyrilApp.factory('UserValidator', function(StringValidator) {
  var UserValidator = function() {
    //global setting for pines notify
    $.pnotify.defaults.delay = 1000;
    $.pnotify.defaults.history = false;
  };

  UserValidator.prototype = {
    isValid: function(user){
		var notEmptyResult = this.isNotEmpty(user);
		var existResult = this.exists(user);

		if(!notEmptyResult.success) {
			return notEmptyResult;
		}

		if(!existResult.success) {
			return existResult;
		}

		return {success : true};
    },
    isNotEmpty: function(user){
		if(StringValidator.isEmpty(user.username) ||
			StringValidator.isEmpty(user.password) ||
			StringValidator.isBlank(user.username) ||
			StringValidator.isBlank(user.password)) {

            return {
            	errorType : 'warning',
				title : 'Empty Fields!',
				message : 'All Items are required.',
				success : false
            };
        }

		return {success : true};
    },
    exists: function(user){
    	//TODO for now use admin/admin
    	if(user.username !== 'admin' && user.password !== 'admin'){
    		return {
    			errorType : 'error',
				title : 'Invalid Credentials!',
				message : 'Please check username or password.',
				success : false
            };	
    	}

		return {success : true};
    }
  };

  return new UserValidator();
});
