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