import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
 mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
 mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_GAME = gql`
mutation addGame($Game:GameSearch!) {
    addGame(Game: $Game){
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

export const DELETE_GAME =gql`
mutation deleteGame($game_id: ID!) {
    deleteGame(game_id: $game_id) {
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
`