'use strict';

/**
 * @ngdoc function
 * @name registrationFormApp.controller:AuthorizationCtrl
 * @description
 * # AuthorizationCtrl
 * Controller of the registrationFormApp
 */
angular
    .module('registrationFormApp')
    .controller('AuthorizationCtrl', ["$scope", "$location", "$localstorage", function($scope, $location, $localstorage) {

        var authObj = $localstorage.getObject('auth');

        $scope.email = authObj.email || '';
        $scope.password = authObj.password || '';
        $scope.passwordConfirm = authObj.passwordConfirm || '';

        $scope.goToPersonalDataStep = function() {

            authObj = {
                "email"           : this.email,
                "password"        : this.password,
                "passwordConfirm" : this.passwordConfirm
            };

            $localstorage.setObject("auth", authObj);

            $localstorage.set('authStepPassed', true);

            $location.path("/personal-data");
        };

    }])
    .directive('validPasswordConfirm', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {

                ctrl.$parsers.unshift(function(value) {

                    var passwordFieldValue = scope.authorization.password.$viewValue;
                    var isValid = value === passwordFieldValue;

                    ctrl.$setValidity('validPasswordConfirm', isValid);

                    return isValid ? value : undefined;

                });
            }
        }
    });