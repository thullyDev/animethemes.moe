export type Anime = {
  anime_id: number;
  slug: string;
  title: string;
  type: string;
  season: string;
  year: number;
  description: string;
  themes: Theme[];
};

export type Theme = {
  theme_id: number;
  slug: string;
  theme_type: string;
  themeEntries: ThemeEntrie[];
};

export type ThemeEntrie = {
  entrie_id: number;
  episodes: string;
  nsfw: boolean;
  spoiler: boolean;
  videos: Video[];
};

export type Video = {
  video_id: number;
  url: string;
  resolution: number;
  size: number;
  lyrics: boolean;
};
