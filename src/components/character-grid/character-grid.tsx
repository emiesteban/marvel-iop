import { JSX } from "react";
import CharacterCard from "../character-card/character-card";
import "./character-grid.css";

type CharacterGridProps = {
  characters: any[];
};

const CharacterGrid = ({ characters }: CharacterGridProps): JSX.Element => {
  return (
    <div className="character-grid" data-testid="character-grid">
      {characters.map((char) => (
        <CharacterCard character={char} key={char.id} />
      ))}
    </div>
  );
};

export default CharacterGrid;
