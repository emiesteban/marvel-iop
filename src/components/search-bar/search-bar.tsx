import { JSX, useState } from "react";
import TextField from "../text-field/text-field";
import lens from "/lens.png";
import "./search-bar.css";

const SearchBar = (): JSX.Element => {
  const [search, setSearch] = useState<string | undefined>(undefined);
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
        />
      </div>
      <hr className="search-bar-separator" />
    </div>
  );
};

export default SearchBar;
