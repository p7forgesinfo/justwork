export type MetaItem = {
  oid: string,
  name: string,
}

export type MovieTitle = {
  oid: string,
  title: string,
  synopsis: string,
  age: number,
  genres: string[] | MetaItem[],
  labels: [],
  assets: SlideAsset[],
  url: string,
  air_date: string,
  end_date: string | null,
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

export type SlideAsset = {
  oid: string,
  asset_type: string,
  resize_url: string,
};

export type Slide = {
  oid: string,
  title: MovieTitle,
  trailer: MovieTrailer,
  preview: MoviePreview,
  live_banner: MovieLiveBanner,
}

export type Showcase = {
  oid: string,
  name: string,
  slides: Slide[]
}