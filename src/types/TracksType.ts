export interface Track {
  id: string;
  uri: string;
  name: string;
  playcount: string;
  discNumber: number;
  duration: Duration;
  playability: Playability;
  contentRating: ContentRating;
  artists: Artists;
  album: Album;
}

export interface TrackItem {
  uid: string;
  track: Track;
}

interface Duration {
  totalMilliseconds: number;
}

interface Playability {
  playable: boolean;
  reason: string;
}

interface ContentRating {
  label: string;
}

interface Artists {
  items: Items;
}
interface Items {
  uri: string;
  profile: Profile;
}

interface Profile {
  name: string;
}

interface Album {
  uri: string;
  coverArt: CoverArt;
}

export interface CoverArt {
  sources: Sources[];
}

interface Sources {
  url: string;
}

// ---- single track ---- //

export interface SingleTrack {
  album: AlbumSingleTrack;
  artists: ArtistsSingleTrack[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface ArtistsSingleTrack {
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface AlbumSingleTrack {
  album_type: string;
  artists: ArtistsOwneredList[];
  id: string;
  images: ImagesSong[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface ArtistsOwneredList {
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ImagesSong {
  url: string;
}
