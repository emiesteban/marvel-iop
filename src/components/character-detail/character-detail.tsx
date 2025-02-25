import { JSX } from "react";
import "./character-detail.css";

type CharacterDetailProps = {
  character: any;
};

const CharacterDetail = ({ character }: CharacterDetailProps): JSX.Element => {
  const isFavorite = false;

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
          <div className="character-detail-title-container">
            <span>{character.name}</span>
            {isFavorite ? (
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
            <span>{character.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
