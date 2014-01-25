'use strict';

angular.module('mean',
    [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ui.bootstrap',
        'ui.route',
        'mean.system',
        'mean.questions'
    ]
);

angular.module('mean.system', []);
angular.module('mean.questions', []);