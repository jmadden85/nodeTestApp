'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Questions',
        'link': 'admin/questions'
    }, {
        'title': 'Create New Question',
        'link': 'admin/questions/create'
    }];
    
    $scope.isCollapsed = false;
}]);