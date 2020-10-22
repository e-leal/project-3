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

export const ADD_JOB = gql`
    mutation addJob($jobId: ID!){
        addJob(jobId: $jobId){
            _id
            username
            email
            employer
        }
    }
`;

export const ADD_APPLICATION = gql`
    mutation addApplication($applicationId: ID!){
        addApplication(applicationId: $applicationId){
            _id
            username
            email
            employer
        }
    }
`;