import React, { createContext, useContext, useState } from "react";
import { Album, ContextType } from "../types/types";
import { ArtistOverview } from "../types/ArtistsType";
import { SingleTrack } from "../types/TracksType";
import { ExploreList } from "../types/exploreTypes";
import { CurrUser } from "../types/userType";

const SpotifyContext = createContext<ContextType | undefined>(undefined);

export const SpotifyContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<CurrUser>();
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
        user,
        setUser,
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
