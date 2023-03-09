import {gql} from '@apollo/client'

export const QUERY_ME =gql`
query me{
    me{
        _id
        name
        email
        myGames {
            game_id
            name
            background_image
            description
            genre
        }
    }
}
`;