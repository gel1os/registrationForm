'use strict';

/**
 * @ngdoc function
 * @name registrationFormApp.controller:PersonalDataCtrl
 * @description
 * # PersonalDataCtrl
 * Controller of the angularSeedApp
 */
angular.module('registrationFormApp')
    .controller('PersonalDataCtrl', ["$scope", "$location", "$localstorage", function($scope, $location, $localstorage) {

        $scope.format = 'dd.MM.yyyy';
        $scope.isDatepickerOpened = false;
        $scope.minDate = new Date(1920, 0, 1);
        $scope.maxDate = new Date(2009, 11, 31);

        var persDataObj = $localstorage.getObject('persData');

        $scope.name  = persDataObj.name || '';
        $scope.dt    = persDataObj.dt ? new Date(persDataObj.dt) : '';
        $scope.about = persDataObj.about || '';

        $scope.aboutMaxLength = 512;

        $scope.openDatepicker = function() {
            $scope.isDatepickerOpened = true;
        };

        $scope.goToConfirmationStep = function() {

            persDataObj = {
                "name"  : this.name,
                "dt"    : this.dt,
                "about" : this.about
            };

            $localstorage.setObject('persData', persDataObj);
            $localstorage.set('persDataStepPassed', true);

            $location.path("/confirmation");
        }

    }])
    .directive('isWrongDateValue', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, ctrl) {

                function validate() {

                    var d = Date.parse(scope.dt);
                    var isValid = true;

                    if (isNaN(d)) {
                        isValid = false;
                    }

                    ctrl.$setValidity('isWrongDateValue', isValid);

                    return isValid;
                }

                scope.$watch(function() {
                    return ctrl.$viewValue;
                }, validate);
            }
        };
    });