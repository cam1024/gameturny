const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        searchGame(name: String!): Game
  }

    type Game {
        name: String!
        background_image: String
  }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
  }

    type Auth {
        token: ID!
        user: User!
  }

    type Mutation {
        login(email: String!, password: String!): Auth!
        addUser(username: String!, email: String!, password: String!): Auth!
  }
`;

module.exports = typeDefs;