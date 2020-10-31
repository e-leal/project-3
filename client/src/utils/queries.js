import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        employer
        number
        name
        createdJobs {
            _id
            company
            createdAt
            title
            contact
            description
            requirements
        }
        createdApplications {
            _id
            resume
            createdAt
            appliedJob {
                _id
                company
            }
        }
    }
}
`;


export const QUERY_JOBS = gql`
{
    jobs{
            _id
            company
            createdAt
            contact
            description
            requirements
        }
    }
  `;

  export const QUERY_JOB = gql`
  query job($id: ID!) {
    job(_id: $id) {
      _id
      company
      title
      createdAt
      contact
      description
      requirements
      jobApplications {
        _id
        createdAt
        email
        resume
        status
        comments {
            _id
            body
            createdAt
        }
      }
    }
  }
`;