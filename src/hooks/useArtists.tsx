import axios from "axios";
import { UseSpotifyContext } from "../context/SpotifyContext";
import { useState } from "react";

const useArtists = () => {
  const { singleartists, setSingleArtists } = UseSpotifyContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchSingleArtist = async (ids: string) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/artists/",
      params: {
        // ids: "2zl95Ek1yTC1ZBpdrzzcLM",
        ids,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_SPOTIFY_API,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.artists);
      setSingleArtists(response.data.artists[0]);
    } catch (error) {
      console.error(error);
      setError("Error:");
    } finally {
      setLoading(false);
    }
  };

  const fetchAtistOverview = async (id: string) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/artist_overview/",
      params: {
        id,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_SPOTIFY_API,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data.artist);
      setSingleArtists(response.data.data.artist);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchSingleArtist,
    fetchAtistOverview,
    singleartists,
    setSingleArtists,
    error,
    setError,
    loading,
    setLoading,
  };
};

export default useArtists;
