import React, { createContext, useContext, useState } from "react";
import { Album, AlbumContextType } from "../types/types";
import { ArtistOverview } from "../types/ArtistsType";

const SpotifyContext = createContext<AlbumContextType | undefined>(undefined);

export const SpotifyContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  // const [singleAlbums, setSingleAlbums] = useState<Album[]>([]);
  // const [artists, setArtists] = useState<Artists[]>([]);
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
