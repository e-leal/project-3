const { AuthenticationError } = require('apollo-server-express');
const { User, Job, Application } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('jobs')
                    .populate('applications');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('jobs')
                .populate('applications');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('jobs')
                .populate('applications');
        },
        jobs: async (parent, { username }) => {
            const params = email ? { username } : {};
            return Job.find(params).sort({ createdAt: -1 });
        },
        applications: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Application.find(params).sort({ createdAt: -1 });
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            console.log("user information is: ", user);

            const token = signToken(user);
            return { token, user };
        },
        createJob: async (parent, args, context) => {
        //addJob: async (parent, {jobData}, context) => {
            console.log("user information is: ", context);
            if (context.user) {
                const job = await Job.create({ ...args, contact: context.user.email });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { jobs: {job} } },
                    { new: true }
                );

                return job;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        createApplication: async (parent, args, context) => {
            if (context.user) {
                const application = await Application.create({ ...args, email: context.user.email, resume: context.user.resume });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { applications: { application } } },
                    { new: true }
                );

                await Job.findByIdAndUpdate(
                    { _id: context.job._id},
                    { $push: {applications: {application}}},
                    { new: true }
                );

                return application;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        saveJob: async (parent, { jobId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { jobs: jobId } },
                    { new: true }
                ).populate('jobs');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        saveApplication: async (parent, { applicationId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { applications: applicationId } },
                    { new: true }
                ).populate('applications');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        removeJob: async (parent, {jobId}, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {jobs: {jobId}}},
                    {new: true}
                );
                return updatedUser;
            }
            throw new AuthenticationError('Please log in before removing a job');
        },
        removeApplication: async (parent, {applicationId}, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {applications: {applicationId}}},
                    {new: true}
                );
                return updatedUser;
            }
            throw new AuthenticationError("Please log in before removing an appliation");
        }
    }
};

module.exports = resolvers;
