import { animesParser } from "./handlers/animeThemeParsers";
import { ApiHandler } from "./handlers/apiHandlers";
import { SearchAnimethemesApiResponse } from "./types/animeThemesInstanceTypes";
import { SearchResponse } from "./types/animeThemesUtilTypes";

const api = new ApiHandler("https://api.animethemes.moe");

export async function searchTheme(
  keywords: string,
  page: string = "1",
): Promise<SearchResponse> {
  const params = {
    q: keywords,
    p: page,
    include: "animethemes.animethemeentries.videos",
    "page[number]": page,
  };
  const data = (await api.get(
    "/anime",
    params,
  )) as SearchAnimethemesApiResponse | null;

  if (data == null) {
    return {
      animes: [],
      page: 1,
      pages: 1,
      limit: 0,
    };
  }

  const { anime, meta } = data;
  const { current_page, last_page, per_page } = meta;
  const animes = animesParser(anime);

  return {
    animes: animes,
    page: current_page,
    pages: last_page,
    limit: per_page,
  };
}
