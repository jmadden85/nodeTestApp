'use strict';

/*******
 * Module dependencies
 *******/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    started: {
        type : Date,
        default : Date.now
    },
    submitted: {
        type : Date,
        default : Date.now
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    question: {
        type: Schema.ObjectId,
        ref: 'Question'
    }
});

AnswerSchema.path('content').validate(function (content) {
    return content.length;
}, 'Answer cannot be blank');

mongoose.model('Answer', AnswerSchema);