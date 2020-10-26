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
            description
            requirements
        }
        createdApplications {
            _id
            resume
            createdAt
            company
            appliedJob {
                _id
                company
            }
        }
    }
}
`;