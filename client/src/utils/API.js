export const searchGame = (query) => {
    return fetch(`https://api.rawg.io/api/games?search=${encodeURIComponent(query)}`);
  };