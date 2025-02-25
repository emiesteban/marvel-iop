import { apiClient } from "../lib/api-client";
import { useQuery } from "@tanstack/react-query";

export const getCharacterById = (characterId: string): Promise<any> => {
  const endpoint = "https://gateway.marvel.com/v1/public/characters/";

  return apiClient(endpoint.concat(characterId));
};

export const useCharacterById = (characterId: string) =>
  useQuery({
    queryKey: ["character", characterId],
    queryFn: () => getCharacterById(characterId),
    staleTime: 86400000,
  });
