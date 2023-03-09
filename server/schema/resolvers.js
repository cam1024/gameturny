const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
       
        me: async (_, __, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('myGames');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        login: async (_, {email, password}) => {
            const user = await User.findOne({email});
            if (!user) {
                throw new AuthenticationError('no user with this email found');
            }

            const passwordMatch = await user.isCorrectPassword(password);
            if (!passwordMatch) {
                throw new AuthenticationError('Password is incorrect.')
            }

            const token = signToken(user);

            return {token, user};
        },
        addUser: async (_, {name, email, password}) => {
            try {
                const user = User.create({name, email, password});
                const token = signToken(user);
                return { token, user };
             }  catch (err) {
                console.error(err);
                throw new Error('Error creating user');
      }
    },
        addGame: async (_, {gameData}, context) => {
            if(context.user) {
            const updatedUser = User.findOneAndUpdate(
                {_id: context.user._id},
                {$push: {myGames:gameData}},
                {
                    new: true,
                    runValidators: true,
                },
            );

            return updatedUser;
        }
        throw new AuthenticationError('you need to be logged in.');
    },
    
        deleteGame: async (_, {game_id}, context) => {
            if(context.user) {
                const updatedUser = User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {myGames: {game_id}}},
                    {
                        new: true,
                        runValidators: true,
                    },
                );

                return updatedUser;
            }
            throw new AuthenticationError('you need to be logged in.');
    },
  }
};


module.exports = resolvers