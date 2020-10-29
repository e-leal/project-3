import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        employer
        createdJobs {
            _id
<<<<<<< HEAD
=======
            company
>>>>>>> develop
            createdAt
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