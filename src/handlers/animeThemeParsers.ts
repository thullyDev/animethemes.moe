import {
  AnimeInstance,
  AnimeThemeEntrieInstance,
  AnimeThemeInstance,
  VideoInstance,
} from "../types/animeThemesInstanceTypes";
import { Anime, Theme, ThemeEntrie, Video } from "../types/animeThemesTypes";

export function animeParser(animeInstance: AnimeInstance): Anime {
  const { id, name, media_format, season, slug, synopsis, year, animethemes } =
    animeInstance;
  const themes: Theme[] = themesParser(animethemes);

  return {
    anime_id: id,
    slug: slug,
    title: name,
    type: media_format,
    season: season,
    year: year,
    description: synopsis,
    themes: themes,
  };
}

export function animesParser(animeInstances: AnimeInstance[]): Anime[] {
  const animes: Anime[] = [];

  for (let i = 0; i < animeInstances.length; i++) {
    const anime = animeParser(animeInstances[i]);
    animes.push(anime);
  }

  return animes;
}

export function themesParser(animeThemes: AnimeThemeInstance[]): Theme[] {
  const themes = [];

  for (let i = 0; i < animeThemes.length; i++) {
    const theme = themeParser(animeThemes[i]);
    themes.push(theme);
  }

  return themes;
}

export function themeParser(theme: AnimeThemeInstance): Theme {
  const { id, slug, type, animethemeentries } = theme;
  const themeEntries: ThemeEntrie[] = [];

  for (let i = 0; i < animethemeentries.length; i++) {
    const entrie = entriesParser(animethemeentries[i]);
    themeEntries.push(entrie);
  }

  return {
    theme_id: id,
    slug: slug,
    theme_type: type,
    themeEntries,
  };
}

export function entriesParser(entrie: AnimeThemeEntrieInstance): ThemeEntrie {
  const { id, episodes, nsfw, spoiler, videos: videoInstances } = entrie;
  const videos: Video[] = [];

  for (let i = 0; i < videoInstances.length; i++) {
    const video = videosParser(videoInstances[i]);
    videos.push(video);
  }

  return {
    entrie_id: id,
    episodes,
    nsfw,
    spoiler,
    videos,
  };
}

export function videosParser(video: VideoInstance): Video {
  const { id, link, size, lyrics, resolution } = video;

  return {
    resolution,
    size,
    lyrics,
    video_id: id,
    url: link,
  };
}
