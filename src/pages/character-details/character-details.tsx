import { JSX, useEffect } from "react";
import { useCharacterById } from "../../hooks/use-character-by-id";
import ProgressBar from "../../components/progress-bar/progress-bar";
import CharacterDetail from "../../components/character-detail/character-detail";
import { useComicList } from "../../hooks/use-comics";
import ComicCarrousel from "../../components/comic-carrousel/comic-carrousel";
import { useParams } from "react-router";

const CharacterDetails = (): JSX.Element => {
  const { characterid = "" } = useParams();
  const offset = 0;
  const limit = 20;
  console.log("characterid", characterid);

  const {
    data: charData,
    isLoading: isLoadingChar,
    isError: isErrorChar,
  } = useCharacterById(characterid);
  const {
    data: comicList,
    isLoading: isLoadingComic,
    isError: isErrorComic,
  } = useComicList(characterid, offset, limit);
  const isLoading = isLoadingChar || isLoadingComic;
  const isError = isErrorChar || isErrorComic;

  useEffect(() => {
    if (!isError && !isLoading) {
      console.log("charData", charData.data);
      console.log("comicList", comicList.data);
    }
  }, [isLoading]);

  return (
    <div className="character-details" data-testid="character-details">
      <ProgressBar isLoading={isLoading} />
      {!isLoading && !isError ? (
        <>
          <CharacterDetail character={charData.data?.results[0]} />
          <ComicCarrousel comics={comicList.data?.results} />
        </>
      ) : null}
      {isError ? <h3>Error Fetching Data</h3> : null}
    </div>
  );
};

export default CharacterDetails;
