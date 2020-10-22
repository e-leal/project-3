const { Schema, model } = require('mongoose');
const moment = require('moment');

const jobSchema = new Schema(
    {
        company: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
        },
        contact: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        requirements: {
            type: String,
            required: true
        }

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Job = model('Job', jobSchema);

module.exports = Job;