// src/api/auth.ts

import axios from "axios";

// Function to extract the access token from the URL hash
export const getSpotifyToken = (): string | null => {
  const hash = window.location.hash;
  if (!hash) return null;

  const params = new URLSearchParams(hash.substring(1));
  return params.get("access_token");
};

// Function to fetch user's top tracks from Spotify
export const fetchUserTopTracks = async (token: string) => {
  try {
    const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    throw new Error("Failed to fetch top tracks. Please check your API token and permissions.");
  }
};
