import {gql} from '@apollo/client'

export const QUERY_ME =gql`
query me{
    me{
        _id
        name
        email
        myGames {
            id
            name
            background_image
        }
    }
}
`;