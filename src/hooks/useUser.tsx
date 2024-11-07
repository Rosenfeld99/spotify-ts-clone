import axios from "axios";
import { UseSpotifyContext } from "../context/SpotifyContext";

const useUser = () => {
  const { user, setUser } = UseSpotifyContext();

  const fetchUser = async (id: string) => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/user_profile/",
      params: {
        id,
        playlistLimit: "10",
        artistLimit: "10",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_SPOTIFY_API,
      },
    };

    try {
      const response = await axios.request(options);
      setUser(response.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { user, setUser, fetchUser };
};

export default useUser;
