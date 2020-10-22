import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!, $employer: Boolean!){
       addUser(username: $username, email: $email, password:$password, employer: $employer){
     	token
       user {
       	_id
       	username
     	}
     }
 }
`;

export const SAVE_JOB = gql`
    mutation saveJob($jobId: ID!){
        saveJob(jobId: $jobId){
            _id
            username
            email
            employer
        }
    }
`;

export const SAVE_APPLICATION = gql`
    mutation saveApplication($applicationId: ID!){
        saveApplication(applicationId: $applicationId){
            _id
            username
            email
            employer
        }
    }
`;

export const ADD_JOB = gql`
mutation addJob($company: String!, $contact: String!, $description: String!, $requirements: String!){
    addJob(company: $company, contact: $contact, description: $description, requirements: $requirements){
        _id
        company
        createdAt
        contact
        description
        requirements
    }
}
`;

export const ADD_APP = gql`
mutation addApplication($resume: String!, $company: String!){
    addApplication(resume: $resumt, company: $company){
        _id
        resume
        createdAt
        company
        jobs{
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