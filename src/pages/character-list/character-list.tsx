import { JSX, useState } from "react";
import { useCharacterList } from "../../hooks/use-characters";
import useCharacterContext from "../../hooks/use-character-context";
import SearchBar from "../../components/search-bar/search-bar";
import ResultCounter from "../../components/result-counter/result-counter";
import CharacterGrid from "../../components/character-grid/character-grid";
import ProgressBar from "../../components/progress-bar/progress-bar";
import { CharacterSearchType } from "../../types";
import "./character-list.css";

const CharacterList = (): JSX.Element => {
  const offset = 0;
  const limit = 50;
  const [search, setSearch] = useState<CharacterSearchType>({
    nameStartsWith: undefined,
  });

  const {
    data,
    isFetching: isLoading,
    isError,
    refetch,
  } = useCharacterList(offset, limit, search);

  const { showFavorites, favorites, getFavoritesCount } = useCharacterContext();

  const characterList = !showFavorites ? data?.data?.results : favorites;
  const counterList = !showFavorites ? data?.data?.count : getFavoritesCount();
  const setSearchName = (name: string | undefined) => {
    setSearch({ nameStartsWith: name });
    refetch();
  };

  return (
    <div className="characterList" data-testid="characterList">
      <ProgressBar isLoading={isLoading} />
      {showFavorites ? <h2 className="favorite-title">Favorites</h2> : null}
      <SearchBar
        initialValue={search.nameStartsWith}
        setSearchName={setSearchName}
        disabled={showFavorites}
      />
      {!isLoading ? (
        <>
          <ResultCounter counter={counterList ?? 0} />
          {characterList ? <CharacterGrid characters={characterList} /> : null}
        </>
      ) : (
        <h2 className="fetching-title">Fetching results</h2>
      )}
      {isError ? <h3>Error Fetching Data</h3> : null}
    </div>
  );
};

export default CharacterList;
