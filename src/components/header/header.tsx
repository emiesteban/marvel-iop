import { JSX } from "react";
import marvel from "/marvel.svg";
import useCharacterContext from "../../hooks/use-character-context";
import { useNavigate } from "react-router";
import "./header.css";

const Header = (): JSX.Element => {
  const { getFavoritesCount, showFavorites, setShowFavorites } =
    useCharacterContext();
  const navigate = useNavigate();
  const onClickHome = () => {
    setShowFavorites(false);
    navigate("/");
  };
  const onClickFavoriteCounter = () => {
    setShowFavorites(!showFavorites);
    navigate("/");
  };
  return (
    <div className="header" data-testid="header">
      <div className="header-container" data-testid="header-container">
        <div className="header-logo" onClick={onClickHome}>
          <img src={marvel} alt="Marvel" />
        </div>
        <div
          className="header-favorite"
          data-testid="header-favorite"
          onClick={() => onClickFavoriteCounter()}
        >
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
