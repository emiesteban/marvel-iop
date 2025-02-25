import { useContext } from "react";
import { type CharacterContextProps } from "../types";
import { CharacterContext } from "../context/character-context";

export default function useCharacterContext(): CharacterContextProps {
  const contextValue = useContext(CharacterContext);
  return contextValue;
}
