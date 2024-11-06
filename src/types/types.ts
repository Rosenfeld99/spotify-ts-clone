import { ArtistOverview } from "./ArtistsType";
import { ExploreList } from "./exploreTypes";
import { SingleTrack } from "./TracksType";

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
  setSingleArtists: React.Dispatch<
    React.SetStateAction<ArtistOverview | undefined>
  >;
  singleSong: SingleTrack | undefined;
  setSingleSong: React.Dispatch<React.SetStateAction<SingleTrack | undefined>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  explorelist: ExploreList | undefined;
  setExplorelist: React.Dispatch<React.SetStateAction<ExploreList | undefined>>;
}

export interface Album {
  uri: string;
  name: string;
  subject: string;
  artist: string;
  coverArt: string;
  year: number;
  artistId:string
}

export interface SingleAlbum {
  artists: Album;
}
