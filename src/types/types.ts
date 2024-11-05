import { Artist, ArtistOverview } from "./ArtistsType";

export interface Album {
  uri: string;
  name: string;
  artist: string;
  coverArt: string;
  year: number;
}

export interface AlbumContextType {
  albums: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  singleartists: ArtistOverview | undefined;
  setSingleArtists: React.Dispatch<React.SetStateAction<ArtistOverview | undefined>>;
}

export interface Album {
  uri: string;
  name: string;
  subject: string;
  artist: string;
  coverArt: string;
  year: number;
}

export interface SingleAlbum {
  artists: Album;
}
