import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        employer
        jobs {
            _id
            company
            createdAt
            contact
            description
            requirements
        }
        applications {
            _id
            resume
            createdAt
            company
            jobs {
                _id
                company
            }
        }
    }
}
`;