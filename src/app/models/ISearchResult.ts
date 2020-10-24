export interface ISearchLocation {
  startPos: number;
  endPos: number;
}

export interface ISearchResult {
  value: string;
  count: number;
  positions: ISearchLocation[];
}
