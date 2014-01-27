'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/questions', {
                templateUrl: 'views/questions/list.html'
            }).
            when('/questions/:questionId', {
                templateUrl: 'views/questions/view.html'
            }).
            when('/admin', {
                templateUrl: 'views/admin/index.html'
            }).
            when('/admin/questions', {
                templateUrl: 'views/admin/questions/list.html'
            }).
            when('/admin/questions/category/:category', {
                templateUrl: 'views/admin/questions/list.html'
            }).
            when('/admin/questions/create', {
                templateUrl: 'views/admin/questions/create.html'
            }).
            when('/admin/questions/:questionId/edit', {
                templateUrl: 'views/admin/questions/edit.html'
            }).
            when('/admin/questions/:questionId', {
                templateUrl: 'views/admin/questions/view.html'
            }).
            when('/', {
                templateUrl: 'views/index.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);