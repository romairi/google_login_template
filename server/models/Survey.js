const mongoose = require('mongoose');
const RecipientSchema = require('./Recipient');

const surveySchema = new mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    subject: {
        type: String,
    },
    recipients: [{
        type: RecipientSchema,
    }],
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dateSent: {
        type: Date,
    },
    lastResponded: {
        type: Date
    },
});

module.exports = mongoose.model('surveys', surveySchema);
