const { Schema, model } = require('mongoose');
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
        company: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        },
        job: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Job'
            }
        ]

    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Application = model('Application', applicationSchema);

module.exports = Application;