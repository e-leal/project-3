const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const moment = require('moment');

const applicationSchema = new Schema(
    {
        resume: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
        },
        email:{
            type: String,
            required: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        resume: {
            type: String,
            required: true
        },
        // company: {
        //     type: String,
        //     required: true
        // },
        // contact: {
        //     type: String,
        //     required: true
        // },
        status: {
            type: String,
            required: true
        },
        appliedJob: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Job'
            }
        ],
        comments: [commentSchema]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Application = model('Application', applicationSchema);

module.exports = Application;