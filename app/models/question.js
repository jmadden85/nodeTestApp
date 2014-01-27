'use strict';

/*************************************************
 * Module dependencies
*************************************************/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*************************************************
 * Questions Schema
*************************************************/
var QuestionSchema = new Schema({
    created: {
        type : Date,
        default : Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    category: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/*************************************************
 * Questions Validations
*************************************************/
QuestionSchema.path('content').validate(function (content) {
    return content.length;
}, 'Content cannot be blank');

/*************************************************
 * Questions Statics
*************************************************/
QuestionSchema.statics.load = function (id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Question', QuestionSchema);