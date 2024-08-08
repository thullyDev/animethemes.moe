import { Anime } from "./animeThemesTypes";

export type SearchTheme = {
  keywords?: null | string;
  year?: null | string;
  page?: string | number;
};

export type SearchResponse = {
  animes: Anime[];
  page: number;
  pages: number;
  limit: number;
};

export type GetAnime = {
  slug: string;
};

// export type GetAnimeResponse = {
//   anime?: Anime;
// }

export type GetAnimeResponse = {
  anime: Anime;
};
