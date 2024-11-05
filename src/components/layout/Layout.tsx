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
      <img
        className=" w-full h-[24.5rem] object-cover object-center"
        // src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        src={
          // singleartists?.images &&
          // singleartists?.images[0] &&
          // singleartists?.images[0].url
          singleartists?.visuals?.headerImage?.sources &&
          singleartists?.visuals?.headerImage?.sources[0]?.url &&
          singleartists?.visuals?.headerImage?.sources[0]?.url
        }
        alt=""
      />
      <div className="  text-accent absolute bottom-0 left-0 p-5">
        <div className=" flex items-center gap-1">
          <div className=" relative w-8 h-8">
            <div className=" bg-accent h-5 w-5 rounded-full absolute z-10 top-1.5 left-1.5" />
            <MdVerified className=" text-3xl text-[#63b5fb] absolute top-0.5 left-0.5 z-40" />
          </div>
          <span className=" text-sm capitalize">Verifierd artist</span>
        </div>
        <h2 className=" text-8xl font-[600] pb-4 capitalize">
          {singleartists?.name}
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
