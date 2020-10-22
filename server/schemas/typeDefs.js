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

    type Job {
        _id: ID
        company: String
        createdAt: String
        contact: String
        description: String
        requirements: String
    }

    type Application {
        _id: ID
        resume: String
        createdAt: String
        company: String
        jobs: [Job]
    }

    type Auth {
        token: ID!
        user: User
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
        addJob(company: String!, contact: String!, description: String!, requirements: String!): Job
        addApplication(resume: String!, company: String!): User
        saveJob(jobId: ID!): User
        saveApplication(applicationId: ID!): User
    }


`;

module.exports = typeDefs;
