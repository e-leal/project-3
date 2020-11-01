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
mutation addUser($username: String!, $name: String, $number: String, $email: String!, $password: String!, $employer: String) {
  addUser(username: $username, name: $name, number: $number, email: $email, password: $password, employer: $employer) {
    token
    user {
      _id
    }
  }
}
`;

export const CREATE_JOB = gql`
mutation createJob($company: String!, $contact: String!, $title: String!, $description: String!, $requirements: String!) {
  createJob(company: $company, contact: $contact, title: $title, description: $description, requirements: $requirements) {
    	company
    	contact
    	description
    	requirements
    }
  }

`;