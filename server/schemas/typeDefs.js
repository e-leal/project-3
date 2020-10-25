const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        email: String
        resume: String
        employer: Boolean
        createdJobs: [Job]
        createdApplications: [Application]
    }

    type Job {
        _id: ID
        company: String
        title: String
        createdAt: String
        contact: String
        description: String
        requirements: String
        jobApplications: [Application]
    }

    type Application {
        _id: ID
        createdAt: String
        email: String
        resume: String
        status: String
        appliedJob: Job
        comments: [Comment]
    }

    type Comment {
        _id: ID
        body: String
        createdAt: String
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        createdJobs(username: String!): [Job]
        createdApplications(username: String!): [Application]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, employer: Boolean!): Auth
        createJob(company: String!, contact: String!, title: String!, description: String!, requirements: String!): Job
        createApplication(resume: String!, company: String!, status: String!): Application
        saveJob(jobId: ID!): User
        saveApplication(applicationId: ID!): User
        removeJob(jobId: ID!): User
        removeApplication(applicationId: ID!): User
    }


`;

module.exports = typeDefs;
