import { MdVerified } from "react-icons/md";
import useArtists from "../../hooks/useArtists";
const Layout = () => {
  const { singleartists } = useArtists();
  console.log(singleartists);

  return (
    <div className=" relative overflow-hidden">
      <div
        className={`bg-[${singleartists?.visuals?.headerImage?.extractedColors?.colorRaw?.hex}] w-full h-[24.5rem] absolute top-0`}
      />
      <div className=" relative">
        <img
          className={` w-full h-[19rem] object-cover object-top bg-[${singleartists?.visuals?.headerImage?.extractedColors?.colorRaw?.hex}]`}
          src={
            (singleartists?.visuals?.headerImage?.sources &&
              singleartists?.visuals?.headerImage?.sources[0]?.url &&
              singleartists?.visuals?.headerImage?.sources[0]?.url) ||
            (singleartists?.discography?.topTracks?.items[0] &&
              singleartists?.discography?.topTracks?.items[0].track.album
                .coverArt.sources &&
              singleartists?.discography?.topTracks?.items[0].track.album
                .coverArt.sources[0].url)
          }
          alt=""
        />
        <div className=" absolute inset-0 bg-gradient-to-t from-[#00000085] to-[#00000000] w-full h-full" />
      </div>
      <div className="  text-accent absolute bottom-0 left-0 p-5">
        {singleartists?.profile?.verified && (
          <div className=" flex items-center gap-1">
            <div className=" relative w-8 h-8">
              <div className=" bg-accent h-5 w-5 rounded-full absolute z-10 top-1.5 left-1.5" />
              <MdVerified className=" text-3xl text-[#63b5fb] absolute top-0.5 left-0.5 z-40" />
            </div>
            <span className=" text-sm capitalize">Verifierd artist</span>
          </div>
        )}
        <h2 className=" text-8xl font-[600] pb-4 capitalize">
          {singleartists?.profile?.name}
        </h2>
        <p className=" px-1.5">
          <span>
            {singleartists?.stats?.monthlyListeners?.toLocaleString()}
          </span>{" "}
          monthly listeners
        </p>
      </div>
    </div>
  );
};

export default Layout;
