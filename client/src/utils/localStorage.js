export const getSavedGameIds = () => {
  const savedGameIds = localStorage.getItem('saved_games')
    ? JSON.parse(localStorage.getItem('saved_games'))
    : [];

  return savedGameIds;
};

export const saveGameIds = (game_idArr) => {
  if (game_idArr.length) {
    localStorage.setItem('saved_games', JSON.stringify(game_idArr));
  } else {
    localStorage.removeItem('saved_games');
  }
};

export const deleteGameId = (game_id) => {
  const savedGameIds = localStorage.getItem('saved_games')
    ? JSON.parse(localStorage.getItem('saved_games'))
    : null;

  if (!savedGameIds) {
    return false;
  }

  const updatedSavedGameIds = savedGameIds?.filter((savedGameId) => savedGameId !== game_id);
  localStorage.setItem('saved_games', JSON.stringify(updatedSavedGameIds));

  return true;
};
