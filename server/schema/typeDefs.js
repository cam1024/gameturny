const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me:User
  }

    type Game {
        game_id: ID!
        name: String!
        background_image: String
        description: String
        genre:String
  }

    type User {
        _id: ID!
        username: String!
        email: String!
        myGames: [Game]!
  }

    type Auth {
        token: ID!
        user: User!
  }

    input GameSearch{
      game_id: ID!
      name: String!
      background_image: String
      description: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth!
        addUser(username: String!, email: String!, password: String!): Auth!
        addGame(Game:GameSearch!): User
        deleteGame(game_id: ID!): User
  }
`;

module.exports = typeDefs;