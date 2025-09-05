export type MetaItem = {
  oid: string,
  name: string,
}

export type AssetType = 'Banner' | 'Poster' | 'Background' | 'Thumbnail';

export type FetchStatus = 'idle' | 'pending' | 'success' | 'error';

export type SlideAsset = {
  oid: string,
  asset_type: AssetType,
  resize_url: string,
};

export type MovieTitleRaw = {
  oid: string,
  title: string,
  synopsis: string,
  age: number,
  genres: string[],
  labels: string[],
  assets: SlideAsset[],
  url: string,
  air_date: string,
  end_date: string | null,
}

export type MovieTitle = Omit<MovieTitleRaw, 'genres' | 'labels'> & {
  genres: MetaItem[],
  labels: MetaItem[],
}

export type MovieVersion = {
  oid: string,
  age: number,
  playback_url: string,
  duration: string,
}

export type MovieTrailer = {
  oid: string,
  versions: MovieVersion[],
  url: string,
}

export type MoviePreview = {
  oid: string,
  versions: MovieVersion[],
  url: string,
}

export type MovieLiveBanner = {
  oid: string,
  versions: MovieVersion[],
  url: string,
}

export type SlideRaw = {
  oid: string,
  title: MovieTitleRaw,
  trailer: MovieTrailer,
  preview: MoviePreview,
  live_banner: MovieLiveBanner,
}

export type Slide = Omit<SlideRaw, 'title'> & {
  title: MovieTitle
}

export type Showcase = {
  oid: string,
  name: string,
  slides: Slide[]
}