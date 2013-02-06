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
			return {
				title : notEmptyResult.title,
				message : notEmptyResult.message,
				success : false
			};
		}

		if(!existResult.success) {
			return {
				title : existResult.title,
				message : existResult.message,
				success : false
			};
		}

		return {success : true};
    },
    isNotEmpty: function(user){
		if(StringValidator.isEmpty(user.username) ||
			StringValidator.isEmpty(user.password) ||
			StringValidator.isBlank(user.username) ||
			StringValidator.isBlank(user.password)) {

            return {
				title : 'Empty Fields!',
				message : 'All Items are required.',
				success : false
            };
        }

		return {success : true};
    },
    exists: function(user){
		return {success : true};
    }
  };

  return new UserValidator();
});
