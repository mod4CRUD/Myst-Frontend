import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { Outlet } from 'react-router-dom';
import {
  getGamesList,
  createGameFavorite,
  createGameList,
  deleteGame,
  updateFavorites
} from '../services/games.js';

const GameListContext = createContext();

export default function GameListProvider({ children }) {
  const [gameList, setGameList] = useState(null);
  const [gameById, setGameById] = useState({});

  //show all catalog
  const fetchGameList = async () => {
    const { data, error } = await getGamesList();

    if (error) {
      console.log(error);
    } 
    if (data) {
      setGameList(data);
      const map = data.reduce((map, gameList) => {
        map[gameList.id] = gameList;
        return map;
      }, {});
      setGameById(map);
    } 
  };

  useEffect(() => {
    fetchGameList();
  }, []);
  //adds to the game catalogue
  const addGame = (gameList) => {
    setGameList((gameLists) => [...gameLists, gameList]);
    setGameById((gameById) => ({
      ...gameById, 
      [gameList.id]: gameList,
    }));
  };

  const updateFavorites = (update) => {
    setGameList((gameLists) => 
      // eslint-disable-next-line max-len
      gameLists.map((gameList) => (gameList.id === update.id ? update : gameList))
    );
    setGameById((gameById) => ({
      ...gameById,
      [update.id]: update,
    }));
  };


  const value = {
    gameList,
    setGameList,
    gameById,
    setGameById,
    addGame,
    updateFavorites
  };

  return (
    <GameListContext.Provider value={value}>
      {children || <Outlet />}
    </GameListContext.Provider>
  );
}

export function useGames() {
  const [error, setError] = useState(null);
  const { gameLists, setGameLists } = useContext(GameListContext);
  
  const addGame = async (gameList) => {
    const { data, error } = await createGameList(gameList);
    if (error) {
      setError(error.message);
    } else {
      setGameLists((gameLists) => [...gameLists, data]);
      setError(null);
    }
  };
  
  return { error, addGame, gameLists };
}

//Adds to the favorites list
export function useGame(id) {
  const { gameById, updateFavList } = useContext(GameListContext);
  const [error, setError] = useState(null);
  //   const { game, setGame } = useContext(GameListContext);
  const gameId = gameById[id];

  const addFavoriteGame = async (game) => {
    const { data, error } = await createGameFavorite(id, game);

    if (error) {
      setError(error.message);
    } else {
      const updatedFavList = { ...gameId, games: [...gameId.games, data] };
      updateFavList(updatedFavList);
      //   setGame((game) => [...game, data]);
      setError(null);
    }
  };
}
//Removes favorite from list

const removeFavoriteGame = async (gameById) => {
  const { error } = await deleteGame(id, gameById);
  if (error) {
    setError(error.message);
  } else {
    const updateFavList = {
      ...games,
      game: games.game.filter((game) => game.id !== gameById),
    };
    updateFavList(updateFavList);
    setError(null);
  }
    
    
  return {
    removeFavoriteGame, error, updateFavorites
  };
};
