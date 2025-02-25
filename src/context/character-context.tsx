import { createContext, JSX, useState, type ReactNode } from "react";
import { type CharacterContextProps } from "../types/index";

export const CharacterContext = createContext<CharacterContextProps>({
  favorites: [],
  setFavorites: () => {},
  getFavoritesCount: () => 0,
  showFavorites: false,
  setShowFavorites: () => {},
});

interface CharacterProviderProps {
  children: ReactNode;
}

export default function CharacterProvider({
  children,
}: CharacterProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const getFavoritesCount = () => favorites.length;

  const contextValue: CharacterContextProps = {
    favorites,
    setFavorites,
    getFavoritesCount,
    showFavorites,
    setShowFavorites,
  };

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
}
