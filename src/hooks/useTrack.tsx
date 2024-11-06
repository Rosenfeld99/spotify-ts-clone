import axios from "axios";
import { UseSpotifyContext } from "../context/SpotifyContext";

const useTrack = () => {
  const { singleSong, setSingleSong, isPlaying, setIsPlaying } =
    UseSpotifyContext();

  const fetchSingleSong = async (ids: string) => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/tracks/",
      params: {
        ids,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_SPOTIFY_API,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setSingleSong(response.data && response.data.tracks[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    singleSong,
    setSingleSong,
    fetchSingleSong,
    isPlaying,
    setIsPlaying,
  };
};

export default useTrack;
