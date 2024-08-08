export type SearchAnimethemesApiResponse = {
  anime: AnimeInstance[];
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
};

export type GetAnimethemesApiRespone = {
  anime: AnimeInstance;
};

export type AnimeInstance = {
  id: number;
  name: string;
  media_format: string;
  season: string;
  slug: string;
  synopsis: string;
  year: number;
  animethemes: AnimeThemeInstance[];
};

export type AnimeThemeInstance = {
  id: number;
  sequence: number;
  slug: string;
  type: string;
  animethemeentries: AnimeThemeEntrieInstance[];
};

export type AnimeThemeEntrieInstance = {
  id: number;
  episodes: string;
  notes: "";
  nsfw: boolean;
  spoiler: boolean;
  version: null | string | number;
  videos: VideoInstance[];
};

export type VideoInstance = {
  id: number;
  basename: string;
  filename: string;
  lyrics: boolean;
  nc: true;
  overlap: string;
  path: string;
  resolution: number;
  size: number;
  source: string;
  subbed: Boolean;
  uncen: boolean;
  tags: string;
  link: string;
};

type Link = {
  url: string | null;
  label: string;
  active: boolean;
};
