'use strict';

mustachedCyrilApp.controller('MainCtrl', 
	['$scope', '$timeout', 'NotificationService', 'UserValidator', 
	function($scope, $timeout, NotificationService, UserValidator) {

		$scope.user = {
			name : '',
			password : ''
		};

		$scope.isLoading = false;

		$scope.init = function(){
			//TODO check if login should be shown or not :)
		};

		$scope.login = function(){
			//stuff...
			//validate user
			var validationResult = UserValidator.isValid($scope.user);

			if(!validationResult.success){
				NotificationService.wobbleElement('#login');
				NotificationService.warning(validationResult.title, validationResult.message);

				return;
			}

			//TODO animate and shit
		};

		//start :3
		$scope.init();
}]);
