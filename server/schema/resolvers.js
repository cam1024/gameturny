const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const fetch = require('node-fetch');
const API_URL = 'https://api.rawg.io/api';
const resolvers = {
    Query: {
        // searchGame: async (_, { name }) => {
        //     const url = `https://api.rawg.io/api/games?search=${encodeURIComponent(name)}`;
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     const game = data.results[0];
        //     return {
        //       name: game.name,
        //       background_image: game.background_image
        //     };
        //  },
        me: async (_, __, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('savedBooks');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        login: async (_, {email, password}) => {
            const user = await User.findOne(email);
            if (!user) {
                throw new AuthenticationError('no user with this email found');
            }

            const passwordMatch = await user.checkPassword(password);
            if (!passwordMatch) {
                throw new AuthenticationError('Password is incorrect.')
            }

            const token = signToken(user);

            return {token, user};
        },
        addUser: async (_, {username, email, password}) => {
            try {
                const user = User.create({username, email, password});
                const token = signToken(user);
                return { token, user };
             }  catch (err) {
                console.error(err);
                throw new Error('Error creating user');
      }
    }
  }
};


module.exports = resolvers