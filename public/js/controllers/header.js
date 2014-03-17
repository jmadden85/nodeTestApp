'use strict';

angular.module('mean.system').controller('HeaderController',
    [
        '$scope',
        'Global',
        function ($scope, Global) {
            $scope.global = Global;
            if ($scope.global.user && $scope.global.user.isAdmin === true) {
                $scope.menu = [{
                    'title': 'Test App',
                    'link': 'admin',
                    'class': 'brand'
                }, {
                    'title': 'Questions',
                    'link': 'admin/questions',
                    'class': 'navLinks'
                }, {
                    'title': 'Create New Question',
                    'link': 'admin/questions/create',
                    'class': 'navLinks'
                }];
            } else {
                $scope.menu = [{
                    'title': 'Test App',
                    'link': '/',
                    'class': 'brand'
                }, {
                    'title': 'Questions',
                    'link': 'questions',
                    'class': 'navLinks'
                }];
            }

            $scope.isCollapsed = false;
        }
    ]
);