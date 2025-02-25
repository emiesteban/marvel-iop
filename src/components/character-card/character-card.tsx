import { JSX } from "react";
import "./character-card.css";
import classNames from "classnames";
import { useNavigate } from "react-router";

type CharacterCardProps = {
  character: any;
};

const CharacterCard = ({ character }: CharacterCardProps): JSX.Element => {
  const isFavorite = true;
  const navigate = useNavigate();
  const onClick = () => navigate(`/char/${character.id}`);

  return (
    <div>
      <div
        className={classNames("character-card", {
          "character-card-favorite": isFavorite,
          "character-card-not-favorite": !isFavorite,
        })}
        data-testid="character-card"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) =>
          ["Enter", " "].includes(event.key) ? onClick() : {}
        }
      >
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="character-image"
        />
        <div className="character-name">
          {character.name}
          <span className="character-card-heart character-card-heart-outline">
            &#9825;
          </span>
          <span className="character-card-heart character-card-heart-filled">
            &#9829;
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
