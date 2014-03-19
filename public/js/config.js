'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // For unmatched routes:
        $urlRouterProvider.otherwise('/');

        // states for my app
        $stateProvider
            .state('all questions', {
                url: '/questions',
                templateUrl: 'views/questions/list.html'
            })
            .state('question by id', {
                url: '/questions/:questionId',
                templateUrl: 'views/questions/view.html'
            })
            .state('admin all questions', {
                url: '/admin/questions',
                templateUrl: 'views/admin/questions/list.html'
            })
            .state('admin question by id', {
                url: '/admin/questions/:questionId',
                templateUrl: 'views/admin/questions/view.html',
                requiresAdmin: true
            })
            .state('admin create question', {
                url: '/admin/questions/create',
                templateUrl: 'views/admin/questions/create.html',
                requiresAdmin: true
            })
            .state('admin edit question', {
                url: '/admin/questions/:questionId/edit',
                templateUrl: 'views/admin/questions/edit.html',
                requiresAdmin: true
            })
            .state('admin view category', {
                url: '/admin/questions/category/:category',
                templateUrl: 'views/admin/questions/list.html',
                requiresAdmin: true
            })
            .state('admin home', {
                url: '/admin',
                templateUrl: 'views/admin/index.html',
                requiresAdmin: true
            })
            .state('home', {
                url: '/',
                templateUrl: 'views/index.html'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);