import gql from 'graphql-tag';

export const QUERY_USERS = gql`
query {
    users {
      username
      email
      employer
      createdJobs { 
          _id
        description
      }
      createdApplications {
        _id
        resume
      }
      }
  }

`;

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
      username
      email
      employer
      createdJobs { 
          _id
        description
      }
      createdApplications {
        _id
        resume
      }
      }
  }

`;

export const QUERY_CREATED_JOBS = gql`
query createdJobs($username: String!) {
    user(username: $username) {
      createdJobs { 
          _id
        company
        createdAt
        contact
        description
        requirements
      }
      }
  }

`;

export const QUERY_CREATED_APPLICATIONS = gql`
query createdApplications($username: String!) {
    user(username: $username) {
      createdApplications { 
          _id
        resume
        createdAt
        email
        resume
        status
        appliedJob {
          title
        }
        comments {
          body
        }
      }
      }
  }

`;

export const QUERY_ME = gql`
query me {
    me {
      _id
      username
      email
    }
  }

`;