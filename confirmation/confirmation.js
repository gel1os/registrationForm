angular.module("registrationFormApp")
    .controller("ConfirmationCtrl", ["$scope", "$localstorage", function($scope, $localstorage) {

        var authObj = $localstorage.getObject('auth');
        var persDataObj = $localstorage.getObject('persData');

        $scope.email = authObj.email || "";
        $scope.password = authObj.password || "";

        $scope.name = persDataObj.name || "";
        $scope.about = persDataObj.about || "";
        $scope.dt = persDataObj.dt || "";

        $scope.confirmed = false;

        $scope.confirm = function() {
            $scope.confirmed = true;
        };

    }]);