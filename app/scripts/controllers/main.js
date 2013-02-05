'use strict';

mustachedCyrilApp.controller('MainCtrl', 
	['$scope', '$timeout', 'NotificationService', 
	function($scope, $timeout, NotificationService) {

		$timeout(function() {
			NotificationService.warning('Foo', 'foobar.');
			$timeout(function() {
				NotificationService.error('Foo', 'foobar.');
				$timeout(function() {
					NotificationService.info('Foo', 'foobar.');
					$timeout(function() {
						NotificationService.success('Foo', 'foobar.');
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);

}]);
