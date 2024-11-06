import { useEffect } from "react";
import axios from "axios";
import { UseSpotifyContext } from "../context/SpotifyContext";
import { Album } from "../types/types";

const useAlboms = () => {
  const { albums, setLoading, setError, setAlbums, loading, error} =
    UseSpotifyContext();

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: "מחשבות טובות",
        type: "albums",
        offset: "0",
        limit: "10",
        numberOfTopResults: "5",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_SPOTIFY_API,
      },
    };

    try {
      const response = await axios.request(options);
      console.log("response :", response);

      const albumsItems = response.data?.albums?.items?.map((item: any) => ({
        uri: item.data.uri,
        name: item.data.name,
        artist: item.data.artists.items[0].profile.name,
        coverArt: item.data.coverArt.sources[0].url,
        year: item.data.date.year,
        artistId: item.data.artists.items[0].uri?.split(':')[2],
      })) as Album[];

      setAlbums(albumsItems);
      console.log(albumsItems);
    } catch (error) {
      setError("Error fetching albums");
    } finally {
      setLoading(false);
    }
  };

  const getSingle = () => {
    fetch(
      "https://spotify23.p.rapidapi.com/albums/?ids=7yKqMoo0ElRnp24pzQy39n",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
          "x-rapidapi-host": import.meta.env.VITE_SPOTIFY_API,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    //   // !albums && (
      // getData(), console.log("send req");
    // );
    // getSingle();
    // fetchSingleArtist("2zl95Ek1yTC1ZBpdrzzcLM");
  }, []);

  return {
    albums,
    setLoading,
    setError,
    setAlbums,
    loading,
    error,
  };
};

export default useAlboms;
