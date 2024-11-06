import axios from "axios";
import { UseSpotifyContext } from "../context/SpotifyContext";

const useExplore = () => {
  const { explorelist, setExplorelist } = UseSpotifyContext();

  const fetchExplore = async () => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/browse_all/",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_SPOTIFY_API,
      },
    };

    try {
      const response = await axios.request(options);
      const data =
        response?.data && response?.data?.data?.browseStart?.sections?.items[0];
        console.log(data);
        
      setExplorelist(data);
    } catch (error) {
      console.error(error);
    }
  };

  return { explorelist, setExplorelist, fetchExplore };
};

export default useExplore;
