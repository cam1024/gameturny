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
mutation addGame($gameData:GameSearch!) {
    addGame(gameData: $gameData){
        _id
        name
        email
        myGames {
            id
            name
            image
        }
    }
}
`;

export const DELETE_GAME = gql`
mutation deleteGame($id: ID!) {
    deleteGame(id: $id) {
        _id
        name
        email
        myGames {
            id
            name
            image
        }
    }
}
`