angular.module("registrationFormApp")
    .directive('checkoutPanel', ["$route", "$localstorage", function($route, $localstorage) {
        return {
            restrict: 'E',
            templateUrl: './checkoutPanel/checkoutPanel.html',
            link: function(scope) {

                scope.$on('$routeChangeSuccess', function(next, current) {
                    scope.currentPath = current.$$route.originalPath;
                    disableLinks();
                });

                function disableLinks() {
                    scope.enablePersData = !!$localstorage.get("authStepPassed");
                    scope.enableConfirmation = !!$localstorage.get("persDataStepPassed");
                }
            }
        };
    }]);