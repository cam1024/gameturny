const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
       me: User
  }

    type Game {
        id: ID!
        name: String!
        image: String
       
  }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        saved_games: [Game]
  }

    type Auth {
        token: ID!
        user: User!
  }

    input GameSearch{
      id: ID!
      name: String!
      image: String
    
    }

    type Mutation {
        login(email: String!, password: String!): Auth!
        addUser(name: String!, email: String!, password: String!): Auth!
        addGame(gameData:GameSearch!): User
        deleteGame(id: ID!): User
  }
`;

module.exports = typeDefs;