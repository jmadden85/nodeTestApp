'use strict';

// Articles routes use articles controller
var questions = require('../controllers/questions');
var authorization = require('./middlewares/authorization');

// Article authorization helpers
var hasAuthorization = function (req, res, next) {
    if (req.question.user.id !== req.user.id || !req.user.isAdmin) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/questions', questions.all);
    app.get('/questions/category/:category', authorization.requiresAdmin, questions.showCategory);
    app.post('/questions', authorization.requiresAdmin, questions.create);
    app.get('/questions/:questionId', questions.show);
    app.put('/questions/:questionId', authorization.requiresAdmin, hasAuthorization, questions.update);
    app.del('/questions/:questionId', authorization.requiresAdmin, hasAuthorization, questions.destroy);

    // Finish with setting up the articleId param
    app.param('questionId', questions.question);
    app.param('category', questions.category);

};