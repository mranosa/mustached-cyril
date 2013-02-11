'use strict';

mustachedCyrilApp.controller('NavCtrl', ['$scope', '$timeout', 'NavService', 
    function($scope, $timeout, NavService) {

    $scope.navProp  = {
        show : false,
        showInsp : false
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

    $scope.toggleInsp = function () {
        if($scope.navProp.showInsp){
            //hide
            $('#right').animate({ left: 0 }, 'fast', function() {
                $scope.navProp.showInsp = false;
            });
        } else {
            //show
            $('#right').animate({ left: 100 }, 'fast', function() {
                $scope.navProp.showInsp = true;
            });
        }
    };

}]);
