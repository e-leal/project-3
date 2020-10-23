const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        employer: Boolean
        jobs: [Job]
        applications: [Application]
    }

    type Listing {
        _id: ID
        company: String
        createdAt: String
        contact: String
        description: String
        requirements: String
        applications: [applications]
        comments: [comments]
    }

    type Application {
        _id: ID
        resume: String
        createdAt: String
        company: String
        contact: String
        jobs: [Job]
        comments: [comments]
    }

    type Auth {
        token: ID!
        user: User
    }

    input JobInput {
        jobId: String!
        company: String
        contact: String
        description: String
        requirements: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        jobs(username: String!): [Job]
        applications(username: String!): [Application]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, employer: Boolean!): Auth
        createJob(company: String!, contact: String!, description: String!, requirements: String!): Job
        createApplication(resume: String!, company: String!): Application
        saveJob(jobId: ID!): User
        saveApplication(applicationId: ID!): User
        removeJob(jobId: ID!): User
        removeApplication(applicationId: ID!): User
    }


`;

module.exports = typeDefs;
