import { useParams } from "react-router-dom";
import Content from "../components/content/Content";
import Layout from "../components/layout/Layout";
import useArtists from "../hooks/useArtists";
import { useEffect } from "react";

const ArtistDetaile = () => {
  const { artistId } = useParams();
  const { fetchSingleArtist, fetchAtistOverview, singleartists } = useArtists();

  const color =
    singleartists?.visuals?.headerImage?.extractedColors?.colorRaw?.hex;

  useEffect(() => {
    // artistId && fetchSingleArtist(artistId);
    // artistId && fetchAtistOverview(artistId);
  }, [artistId]);
  return (
    <div>
      <Layout />
      <Content
        color={`${color != "" ? `${color}90` : "#817f7f96"}`}
        isFollowing={singleartists?.following || false}
        topTracks={singleartists?.discography?.topTracks?.items || []}
      />
    </div>
  );
};

export default ArtistDetaile;
