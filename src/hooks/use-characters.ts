import { apiClient } from "../lib/api-client";
import { useQuery } from "@tanstack/react-query";
import { CharacterSearchType } from "../types";

export const getCharacterList = (
  offset: number,
  limit: number,
  orderBy?: string,
  search?: CharacterSearchType
): Promise<any> => {
  const endpoint = "https://gateway.marvel.com/v1/public/characters?";
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

export const useCharacterList = (
  offset: number,
  limit: number,
  search?: CharacterSearchType,
  orderBy?: string
) =>
  useQuery({
    queryKey: [
      "characterList",
      offset,
      limit,
      orderBy,
      ...(search ? Object.values(search) : []),
    ],
    queryFn: () => getCharacterList(offset, limit, orderBy, search),
    staleTime: 86400000,
  });
