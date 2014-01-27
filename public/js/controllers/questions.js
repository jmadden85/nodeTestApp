'use strict';

angular.module('mean.questions').controller('QuestionsController',
    [
        '$scope',
        '$routeParams',
        '$location',
        'Global',
        'Questions',
        function ($scope, $routeParams, $location, Global, Questions) {
            $scope.global = Global;

            $scope.create = function() {
                var question = new Questions({
                    title: this.title,
                    content: this.content,
                    category: this.category
                });
                question.$save(function (response) {
                    $location.path('admin/questions/' + response._id);
                });
                this.content = '';
            };

            $scope.remove = function (question) {
                if (question) {
                    question.$remove();

                    for (var i in $scope.questions) {
                        if ($scope.questions[i] === question) {
                            $scope.questions.splice(i, 1);
                        }
                    }
                } else {
                    $scope.question.$remove();
                    $location.path('admin/questions');
                }
            };

            $scope.update = function() {
                var question = $scope.question;
                if (!question.updated) {
                    question.updated = [];
                }
                question.updated.push(new Date().getTime());

                question.$update(function () {
                    $location.path('admin/questions/' + question._id);
                });
            };

            $scope.find = function() {
                Questions.query(function (questions) {
                    $scope.questions = questions;
                });
            };

            $scope.findCategory = function () {
                Questions.get({
                    category: $routeParams.category
                }, function (questions) {
                    $scope.questions = questions;
                });
            };

            $scope.findOne = function() {
                Questions.get({
                    questionId: $routeParams.questionId
                }, function(question) {
                    $scope.question = question;
                });
            };
        }
    ]
);