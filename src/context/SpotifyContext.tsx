import React, { createContext, useContext, useState } from "react";
import { Album, AlbumContextType } from "../types/types";
import { ArtistOverview } from "../types/ArtistsType";
import { SingleTrack } from "../types/TracksType";
import { ExploreList } from "../types/exploreTypes";

const SpotifyContext = createContext<AlbumContextType | undefined>(undefined);

export const SpotifyContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  // const [singleAlbums, setSingleAlbums] = useState<Album[]>([]);
  // const [artists, setArtists] = useState<Artists[]>([]);
  const [explorelist, setExplorelist] = useState<ExploreList>();
  const [singleSong, setSingleSong] = useState<SingleTrack>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [singleartists, setSingleArtists] = useState<ArtistOverview>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <SpotifyContext.Provider
      value={{
        albums,
        setLoading,
        setError,
        setAlbums,
        loading,
        error,
        singleartists,
        setSingleArtists,
        setSingleSong,
        singleSong,
        isPlaying,
        setIsPlaying,
        explorelist,
        setExplorelist,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export const UseSpotifyContext = () => {
  const context = useContext(SpotifyContext);
  if (context === undefined) {
    throw new Error("Use Context must be used within an Provider");
  }
  return context;
};
