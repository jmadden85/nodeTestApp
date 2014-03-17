'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/questions', {
                templateUrl: 'views/questions/list.html',
                requiresAdmin: false
            }).
            when('/questions/:questionId', {
                templateUrl: 'views/questions/view.html',
                requiresAdmin: false
            }).
            when('/admin', {
                templateUrl: 'views/admin/index.html',
                requiresAdmin: true
            }).
            when('/admin/questions', {
                templateUrl: 'views/admin/questions/list.html',
                requiresAdmin: true
            }).
            when('/admin/questions/category/:category', {
                templateUrl: 'views/admin/questions/list.html',
                requiresAdmin: true
            }).
            when('/admin/questions/create', {
                templateUrl: 'views/admin/questions/create.html',
                requiresAdmin: true
            }).
            when('/admin/questions/:questionId/edit', {
                templateUrl: 'views/admin/questions/edit.html',
                requiresAdmin: true
            }).
            when('/admin/questions/:questionId', {
                templateUrl: 'views/admin/questions/view.html',
                requiresAdmin: true
            }).
            when('/', {
                templateUrl: 'views/index.html',
                requiresAdmin: false
            }).
            otherwise({
                redirectTo: '/',
                requiresAdmin: false
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);