'use strict';

/*************************************************
 * Generic require login routing middleware
*************************************************/
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

/*************************************************
 * Admin login required routing middleware
*************************************************/
exports.requiresAdmin = function (req, res, next) {
    console.log(!req.isAuthenticated, !req.user.isAdmin);
    if (!req.isAuthenticated() || !req.user.isAdmin) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

/*************************************************
 * User authorizations routing middleware
*************************************************/
exports.user = {
    hasAuthorization: function(req, res, next) {
        if (req.profile.id !== req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/*************************************************
 * Question authorizations routing middleware
*************************************************/
exports.question = {
    hasAuthorization: function (req, res, next) {
        if (req.question.user.id !== req.user.id || !req.user.isAdmin) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};