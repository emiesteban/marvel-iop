import { JSX } from "react";
import "./comic-card.css";

type ComicCardProps = {
  comic: any;
};

const ComicCard = ({ comic }: ComicCardProps): JSX.Element => {
  return (
    <div className="comic-card" data-testid="comic-card">
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        className="comic-image"
        alt={comic.name}
      />
      <div className="comic-title">{comic.title}</div>
    </div>
  );
};

export default ComicCard;
