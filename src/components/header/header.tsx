import { JSX } from "react";
import marvel from "/marvel.svg";
import useCharacterContext from "../../hooks/use-character-context";
import "./header.css";

const Header = (): JSX.Element => {
  const { getFavoritesCount } = useCharacterContext();
  return (
    <div className="header" data-testid="header">
      <div className="header-container" data-testid="header-container">
        <div className="header-logo">
          <a href="/">
            <img src={marvel} alt="Marvel" />
          </a>
        </div>
        <div className="header-favorite" data-testid="header-favorite">
          <span className="header-heart-filled">&#9829;</span>
          <div
            className="header-favorite-counter"
            data-testid="header-favorite-counter"
          >
            {getFavoritesCount()}
          </div>
        </div>
      </div>
      <hr className="header-separator" />
    </div>
  );
};

export default Header;
