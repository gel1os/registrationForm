'use strict';

/**
 * @ngdoc overview
 * @name registrationFormApp
 * @description
 * # registrationFormApp
 *
 * Main module of the application.
 */
angular
    .module('registrationFormApp', ['ngRoute', 'ngMessages', 'ui.bootstrap'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'authorization/authorization.html',
                controller: 'AuthorizationCtrl'
            })
            .when('/personal-data', {
                templateUrl: 'personalData/personalData.html',
                controller: 'PersonalDataCtrl'
            })
            .when('/confirmation', {
                templateUrl: 'confirmation/confirmation.html',
                controller: 'ConfirmationCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
