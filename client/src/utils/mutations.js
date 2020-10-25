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

export const CREATE_JOB = gql`
mutation createJob($company: String!, $contact: String!, $description: String!, $requirements: String!){
    addJob(company: $company, contact: $contact, description: $description, requirements: $requirements){
        _id
        company
        title
        createdAt
        contact
        description
        requirements
    }
}
`;

export const CREATE_APP = gql`
mutation createApplication($resume: String!, $company: String!){
    createApplication(resume: $resume, company: $company){
        _id
        resume
        email
        createdAt
        status
        appliedJob{
            _id
            company
            createdAt
            contact
            description
            requirements
        }
        comments {
            username
            createdAt
            body
        }
    }
}
`;

export const REMOVE_APP = gql`
mutation removeApplication($appplicationId: ID){
    removeApplication(applicationId: $applicationId){
        _id
        username
        email
        employer
        createdApplications{
            resume
            email
            createdAt
            status
            appliedJob{
                _id
                company
                createdAt
                contact
                description
                requirements
            }
            comments {
                username
                createdAt
                body
            }
        }
    }
}
`;


export const REMOVE_JOB = gql`
mutation removeJob($jobId: ID){
    removeJob(jobId: $jobId){
        _id
        username
        email
        employer
        createdJobs{
            company
            title
            createdAt
            contact
            description
            requirements
        }
    }
}
`;