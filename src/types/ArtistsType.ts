import { CoverArt, TrackItem } from "./TracksType";

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
  profile: Profile;
  visuals: Visuals;
  discography: Discography;
  stats: Stats;
  relatedContent: object;
  goods: object;
}

interface Stats {
  followers: number;
  monthlyListeners: number;
  worldRank: number;
}

interface Profile {
  name: string;
  verified: boolean;
  pinnedItem: PinnedItem;
  biography: Biography;
  externalLinks: ExternalLinks;
}

interface ExternalLinks {
  name: string;
  url: string;
}

interface Biography {
  text: string;
}

interface PinnedItem {
  comment: string;
  type: string;
}

export interface Visuals {
  headerImage: HeaderImage;
}

interface HeaderImage {
  sources: Sources[];
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
  popularReleases: PopularReleases;
}

interface TopTracks {
  items: TrackItem[];
}

interface PopularReleases {
  totalCount: number;
  items: Items[];
}

interface Items {
  releases: Releases;
}

interface Releases {
  items: ItemsReleases[];
}

interface ItemsReleases {
  id: string;
  uri: string;
  name: string;
  type: string;
  copyright: Copyright;
  date: DateRelease;
  coverArt: CoverArt;
  tracks: TrackTotalCount;
  label: string;
  playability: PlayabilityItemReleas;
}

interface PlayabilityItemReleas {
  playable: boolean;
  reason: string;
}

interface DateRelease {
  year: number;
  month: number;
  day: number;
  precision: string;
}

interface Copyright {
  items: CopyrightItem;
}
interface CopyrightItem {
  type: string;
  text: string;
}

interface TrackTotalCount {
  totalCount: number;
}
