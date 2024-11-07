export interface CurrUser {
  uri: string;
  name: string;
  public_playlists: Public_playlists[];
  total_public_playlists_count: number;
  has_spotify_name: boolean;
  color: number;
  allow_follows: boolean;
  show_follows: boolean;
}

export interface Public_playlists {
  uri: string;
  name: string;
  image_url: string;
  owner_name: string;
  owner_uri: string;
}
