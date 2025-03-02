import { createContext, JSX, useMemo, useState, type ReactNode } from "react";
import { type Character, type CharacterContextProps } from "../types/index";

export const CharacterContext = createContext<CharacterContextProps>({
  favorites: [],
  addFavorite: () => null,
  removeFavorite: () => null,
  isFavorite: () => false,
  getFavoritesCount: () => 0,
  showFavorites: false,
  setShowFavorites: () => {},
});

type CharacterProviderProps = {
  children: ReactNode;
};

export default function CharacterProvider({
  children,
}: CharacterProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const getFavoritesCount = () => favorites.length;

  const addFavorite = (char: Character) => setFavorites([...favorites, char]);

  const removeFavorite = (char: Character) =>
    setFavorites(favorites.filter((elem) => elem.id !== char.id));

  const isFavorite = (char: Character) =>
    !!favorites.find((elem) => elem.id === char.id);

  const contextValue: CharacterContextProps = useMemo(
    () => ({
      favorites: favorites,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite,
      isFavorite: isFavorite,
      getFavoritesCount: getFavoritesCount,
      showFavorites: showFavorites,
      setShowFavorites: setShowFavorites,
    }),
    [favorites, showFavorites]
  );

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
}
