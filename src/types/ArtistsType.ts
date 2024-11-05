import { TrackItem } from "./TracksType";

export interface Artists {
  artists: Artist[];
}

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: string | null;
  total: number;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface ArtistOverview {
  id: string;
  uri: string;
  following: boolean | undefined;
  profile: object;
  visuals: Visuals;
  discography: Discography;
  stats: object;
  relatedContent: object;
  goods: object;
}

interface Visuals {
  headerImage: HeaderImage;
}

interface HeaderImage {
  sources: Sources;
  extractedColors: ExtractedColors;
}

interface ExtractedColors {
  colorRaw: ColorRaw;
}

interface ColorRaw {
  hex: string;
}

interface Sources {
  url: string;
}

interface Discography {
  topTracks: TopTracks;
}

interface TopTracks {
  items: TrackItem[];
}
