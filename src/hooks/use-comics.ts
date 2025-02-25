import { apiClient } from "../lib/api-client";
import { useQuery } from "@tanstack/react-query";
import { ComicSearchType } from "../types";

export const getComicList = (
  characterId: string,
  offset: number,
  limit: number,
  orderBy?: string,
  search?: ComicSearchType
): Promise<any> => {
  const endpoint = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?`;
  const params = {
    ...search,
    ...(orderBy ? { orderBy } : {}),
    offset: offset.toString(10),
    limit: limit.toString(10),
  };
  const paramsString = Object.entries(params)
    .filter(([, v]) => !!v)
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
  return apiClient(endpoint.concat(paramsString));
};

export const useComicList = (
  characterId: string,
  offset: number,
  limit: number,
  search?: ComicSearchType,
  orderBy?: string
) =>
  useQuery({
    queryKey: [
      "comicList",
      offset,
      limit,
      orderBy,
      characterId,
      ...(search ? Object.values(search) : []),
    ],
    queryFn: () => getComicList(characterId, offset, limit, orderBy, search),
    staleTime: 86400000,
  });
