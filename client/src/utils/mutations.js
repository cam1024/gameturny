import { gql } from "@apollo/client";

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
 mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GAME = gql`
mutation addGame($Game:GameSearch!) {
    addGame(Game: $Game){
        _id
        username
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

export const DELETE_GAME =gql`
mutation deleteGame($game_id: ID!) {
    deleteGame(game_id: $game_id) {
        _id
        username
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
`