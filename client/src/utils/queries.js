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
            company
            createdAt
            contact
            title
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