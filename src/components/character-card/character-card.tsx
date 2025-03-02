import { JSX } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router";
import useCharacterContext from "../../hooks/use-character-context";
import "./character-card.css";

type CharacterCardProps = {
  character: any;
};

const CharacterCard = ({ character }: CharacterCardProps): JSX.Element => {
  const { isFavorite } = useCharacterContext();
  const isFav = isFavorite(character);
  const navigate = useNavigate();
  const onClick = () => navigate(`/char/${character.id}`);

  return (
    <div
      className={classNames("character-card", {
        "character-card-favorite": isFav,
        "character-card-not-favorite": !isFav,
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
  );
};

export default CharacterCard;
