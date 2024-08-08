import { animeParser, animesParser } from "./handlers/animeThemeParsers";
import { ApiHandler } from "./handlers/apiHandlers";
import {
  GetAnimethemesApiRespone,
  SearchAnimethemesApiResponse,
} from "./types/animeThemesInstanceTypes";
import {
  GetAnime,
  GetAnimeResponse,
  SearchResponse,
  SearchTheme,
} from "./types/animeThemesUtilTypes";

const api = new ApiHandler("https://api.animethemes.moe");

export async function searchTheme({
  keywords = null,
  year = null,
  page = "1",
}: SearchTheme = {}): Promise<SearchResponse> {
  const params: Record<string, string | number> = {
    p: page,
    include: "animethemes.animethemeentries.videos",
    "page[number]": page,
  };

  if (year) {
    params["filter[year]"] = year;
  }

  if (keywords) {
    params["q"] = keywords;
  }

  const response = (await api.get(
    "/anime",
    params,
  )) as SearchAnimethemesApiResponse | null;

  if (response == null) {
    return {
      animes: [],
      page: 1,
      pages: 1,
      limit: 0,
    };
  }

  const { anime, meta } = response;
  const { current_page, last_page, per_page } = meta;
  const animes = animesParser(anime);

  return {
    animes: animes,
    page: current_page,
    pages: last_page,
    limit: per_page,
  };
}

export async function getAnime({ slug }: GetAnime): Promise<GetAnimeResponse> {
  if (!slug) {
    throw new Error("slug is invalid");
  }

  const params: Record<string, string | number> = {
    include: "animethemes.animethemeentries.videos",
  };
  const response = (await api.get(
    `/anime/${slug}`,
    params,
  )) as GetAnimethemesApiRespone | null;

  if (!response) {
    throw new Error("something went wrong with https://api.animethemes.moe, slug may be invalid");
  }

  const { anime: animeInstance } = response;
  const anime = animeParser(animeInstance);

  return {
    anime,
  };
}
