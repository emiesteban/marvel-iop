import { JSX } from "react";
import ComicCard from "../comic-card/comic-card";
import "./comic-carrousel.css";

type ComicCarrouselProps = {
  comics: any[];
};

const ComicCarrousel = ({ comics }: ComicCarrouselProps): JSX.Element => {
  return (
    <div className="comic-carrousel" data-testid="comic-carrousel">
      {comics && comics.length >= 1 && (
        <div className="comic-content-spacing">
          <h2 className="comics-title">COMICS</h2>
          <div className="comics-container">
            {comics.map((elem) => (
              <ComicCard key={elem.id} comic={elem} />
            ))}
          </div>
        </div>
      )}
      {comics && comics.length === 0 && <div>This character has no comics</div>}
    </div>
  );
};

export default ComicCarrousel;
