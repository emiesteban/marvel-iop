import { JSX } from "react";
import useCharacterContext from "../../hooks/use-character-context";
import { Character } from "../../types";
import "./character-detail.css";

type CharacterDetailProps = {
  character: Character;
};

const CharacterDetail = ({ character }: CharacterDetailProps): JSX.Element => {
  const { addFavorite, removeFavorite, isFavorite } = useCharacterContext();
  const isFav = isFavorite(character);

  const updateFavorite = () =>
    isFav ? removeFavorite(character) : addFavorite(character);

  return (
    <div className="character-detail" data-testid="character-detail">
      <div
        className="character-detail-container"
        data-testid="character-detail-container"
      >
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="character-detail-image"
        />
        <div className="character-detail-text-container">
          <div
            className="character-detail-title-container"
            onClick={() => updateFavorite()}
          >
            <h1>{character.name}</h1>
            {isFav ? (
              <span className="character-card-heart character-card-heart-filled">
                &#9829;
              </span>
            ) : (
              <span className="character-card-heart character-card-heart-outline">
                &#9825;
              </span>
            )}
          </div>
          <div className="character-detail-description">
            <h4>{character.description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
