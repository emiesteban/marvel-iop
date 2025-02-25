import { JSX } from "react";

type ComicCarrouselProps = {
  comics: any[];
};

const ComicCarrousel = ({ comics }: ComicCarrouselProps): JSX.Element => {
  return (
    <div className="comic-carrousel" data-testid="comic-carrousel">
      ComicCarrousel
    </div>
  );
};

export default ComicCarrousel;
