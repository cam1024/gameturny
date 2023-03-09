require('dotenv').config();

export const searchGame = (query) => {
  return fetch(`https://api.rawg.io/api/games?key=3cef6cdbeed5482aaa8ce3f7cdd1f83b&search=${query}`);
};

