'use strict';

mustachedCyrilApp.controller('NavCtrl', ['$scope', '$timeout', 'NavService', 
    function($scope, $timeout, NavService) {

    $scope.navProp  = {
        show : false
    };

    $scope.$on('show_nav', function () {
        $scope.showNav();
    });

    $scope.$on('hide_nav', function () {
        $scope.hideNav();
    });

    $scope.showNav = function () {
        if(!$scope.navitems){
            $scope.navitems = NavService.getNavitems();
        };

        $scope.navProp.show = true;
        $('.top-nav').addClass("animated bounceInDown");

        $timeout(function() {
            $('top-nav').removeClass("animated bounceInDown");
        }, 1000);
    };

    $scope.hideNav = function () {
        $('top-nav').addClass("animated fadeOutUp");

        $timeout(function() {
            $('top-nav').removeClass("animated fadeOutUp");
            $scope.navProp.show = false;
        }, 500);
    };

}]);
