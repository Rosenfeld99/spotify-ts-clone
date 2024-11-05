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

interface CoverArt {
  sources: Sources[];
}

interface Sources {
  url: string;
}
