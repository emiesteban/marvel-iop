import { JSX } from "react";
import { useCharacterList } from "../../hooks/use-characters";
import useCharacterContext from "../../hooks/use-character-context";
import SearchBar from "../../components/search-bar/search-bar";
import ResultCounter from "../../components/result-counter/result-counter";
import CharacterGrid from "../../components/character-grid/character-grid";
import ProgressBar from "../../components/progress-bar/progress-bar";

const CharacterList = (): JSX.Element => {
  const offset = 0;
  const limit = 50;
  const search = {};

  const { data, isLoading, isError, refetch } = useCharacterList(
    offset,
    limit,
    search
  );

  const { showFavorites, favorites, getFavoritesCount } = useCharacterContext();

  const characterList = !showFavorites ? data?.data?.results : favorites;
  const counterList = !showFavorites ? data?.data?.count : getFavoritesCount();

  return (
    <div className="characterList" data-testid="characterList">
      <ProgressBar isLoading={isLoading} />
      <SearchBar />
      <ResultCounter counter={counterList ?? 0} />
      {characterList ? <CharacterGrid characters={characterList} /> : null}
      {isError ? <h3>Error Fetching Data</h3> : null}
    </div>
  );
};

export default CharacterList;
