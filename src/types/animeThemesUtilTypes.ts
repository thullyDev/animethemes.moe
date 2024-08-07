import { Anime } from "./animeThemesTypes";

export type SearchResponse = {
  animes: Anime[];
  page: number;
  pages: number;
  limit: number;
};
