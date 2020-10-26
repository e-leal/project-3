const { AuthenticationError } = require('apollo-server-express');
const { User, Job, Application } = require('../models');
const { pathType } = require('../models/Comment');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('createdJobs')
                    .populate({
                        path: 'createdApplications',
                        model: 'Application',
                        populate: {
                          path: 'appliedJob',
                          model: 'Job'
                        }
                    });
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('createdJobs')
                //.populate('createdApplications')
                .populate({
                    path: 'createdApplications',
                    model: 'Application',
                    populate: {
                      path: 'appliedJob',
                      model: 'Job'
                    }
                });
        },
        applications: async () => {
            return Application.find()
            .populate('appliedJob')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('createdJobs')
                .populate({
                    path: 'createdApplications',
                    model: 'Application',
                    populate: {
                      path: 'appliedJob',
                      model: 'Job'
                    }
                });
        },
        createdJobs: async (parent, { username }) => {
            const params = email ? { username } : {};
            return Job.find(params).populate('jobApplications').sort({ createdAt: -1 });
        },
        createdApplications: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Application.find(params).populate('appliedJob').sort({ createdAt: -1 });
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
                    { $push: { createdJobs: job._id } },
                    { new: true }
                );

                return job;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        createResume: async (parent, {resume}, context) => {
            if(context.user){
                const updatedUser = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {resume: resume},
                    {nrew: true}
                )
                return updatedUser;
            }
            throw new AuthenticationError("Please log in before creating a resume");
        },
        createApplication: async (parent, args, context) => {
            if (context.user) {
                const job = await Job.findById({
                    _id: args.jobId
                });
                console.log("my job: ", job)
                const application = await Application.create({ email: context.user.email, appliedJob: [job], ...args });
                console.log(application)
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { createdApplications: application._id } },
                    { new: true }
                );

                const updatedJob = await Job.findByIdAndUpdate(
                    { _id: args.jobId},
                    { $push: {jobApplications: application._id }},
                    { new: true }
                );
                    console.log("my updatedJob is: ",updatedJob)
                return application;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        saveJob: async (parent, { jobId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { createdJobs: jobId } },
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
                    { $addToSet: { createdApplications: applicationId } },
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
                    {$pull: {createdJobs: {jobId}}},
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
                    {$pull: {createdApplications: {applicationId}}},
                    {new: true}
                );
                return updatedUser;
            }
            throw new AuthenticationError("Please log in before removing an appliation");
        }
    }
};

module.exports = resolvers;
