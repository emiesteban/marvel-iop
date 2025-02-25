export interface CharacterContextProps {
  favorites: any[];
  setFavorites: React.Dispatch<React.SetStateAction<any[]>>;
  getFavoritesCount: () => number;
  showFavorites: boolean;
  setShowFavorites: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CharacterSearchType {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
}

export interface ComicSearchType {
  format?: string;
  formatType?: string;
  noVariants?: string;
  dateDescriptor?: string;
  dateRange?: string;
  title?: string;
  titleStartsWith?: string;
  startYear?: string;
  issueNumber?: string;
  diamondCode?: string;
  digitalId?: string;
  upc?: string;
  isbn?: string;
  ean?: string;
  issn?: string;
  hasDigitalIssue?: string;
  modifiedSince?: string;
  creators?: string;
  series?: string;
  events?: string;
  stories?: string;
  sharedAppearances?: string;
  collaborators?: string;
}
