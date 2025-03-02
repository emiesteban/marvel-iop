import { JSX, useState } from "react";
import TextField from "../text-field/text-field";
import lens from "/lens.png";
import "./search-bar.css";

type SearchBarProps = {
  setSearchName: (name: string | undefined) => void;
  disabled: boolean;
  initialValue: undefined | string;
};

const SearchBar = ({
  setSearchName,
  disabled = false,
  initialValue,
}: SearchBarProps): JSX.Element => {
  const [search, setSearch] = useState<string | undefined>(initialValue);
  const onIntro = () => setSearchName(search);

  return (
    <div className="search-bar" data-testid="search-bar">
      <div
        className="search-bar-field-container"
        data-testid="search-bar-field-container"
      >
        <div>
          <img src={lens} alt="Marvel" className="search-bar-lens" />
        </div>
        <TextField
          value={search ?? ""}
          placeholder="SEARCH A CHARACTER..."
          onChange={(value) => {
            setSearch(value);
          }}
          onIntro={() => onIntro()}
          disabled={disabled}
        />
      </div>
      <hr className="search-bar-separator" />
    </div>
  );
};

export default SearchBar;
