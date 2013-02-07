'use strict';

mustachedCyrilApp.controller('MainCtrl', 
	['$scope', '$timeout', 'NotificationService', 'UserValidator', 
	'ProgressBarService', 'NavService', '$location', 
	function($scope, $timeout, NotificationService, UserValidator, 
		ProgressBarService, NavService, $location) {

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

				if(validationResult.errorType === 'error'){
					NotificationService.error(validationResult.title, validationResult.message);
				} else {
					NotificationService.warning(validationResult.title, validationResult.message);	
				}
				
				return;
			}

			//TODO animate and shit
			NotificationService.success('Successful Login!', 'Account Verified! Welcome!');	
			loadApp();
		};

		function loadApp(){
			//show loading bar
	        $scope.isLoading = true;

	        //loading status...
	        console.log('Initialize everything...');
	        ProgressBarService.start();
	        ProgressBarService.animateProgress(45, function(){
	            $timeout(function() {
	                console.log('Loading user info...');
	                ProgressBarService.animateProgress(70, function(){
	                    $timeout(function() {
	                        console.log('Loading user forms...');
	                        ProgressBarService.animateProgress(100, function(){
	                            console.log('Done!');
	                            $timeout(function() {
	                                console.log('Do post process here.');
	                                $location.path('/inspection');
	                            }, 500);
	                        });
	                    }, 2000);
	                });
	            }, 2000);
	        });
		}

		//start :3
		$scope.init();
}]);
