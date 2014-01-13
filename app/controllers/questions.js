'use strict';

/*******
 * Module dependencies
 *******/
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var _ = require('lodash');

/*******
 * Find a question by ID
 *******/
exports.question = function (req, res, next, id) {
    Question.load(id, function (err, question) {
        if (err) {
            return next(err);
        }
        if (!question) {
            return next(new Error('Failed to load question ' + id));
        }
        req.question = question;
        next();
    });
};

/*******
 * Create a question
 *******/
exports.create = function (req, res) {
    var question = new Question(req.body);
    question.user = req.user;

    question.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: question
            });
        } else {
            res.jsonp(question);
        }
    });
};

exports.update = function (req, res) {
    var question = req.question;

    question = _.extend(article, req.body);

    question.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: question
            });
        } else {
            res.jsonp(question);
        }
    });
};

/*******
 * Delete a question
 *******/
exports.destroy = function (req, res) {
    var question = req.question;

    question.remove(function (err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/*******
 * Show a question
 *******/
exports.show = function (req, res) {
    res.jsonp(req.question);
};


/*******
 * Show all questions
 *******/
exports.all = function (req, res) {
    Question.find().sort('-created').populate('user', 'name username').exec(function (err, questions) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(questions);
        }
    })
};