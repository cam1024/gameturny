export const searchGame = (query) => {
    return fetch(`https://api.rawg.io/api/games?search=${encodeURIComponent(query)}`)
      .then(response => {
        if (!response.ok) {
          throw new Errror('Network response failed');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was an issue with the fetch')
        throw error;
      })
    };