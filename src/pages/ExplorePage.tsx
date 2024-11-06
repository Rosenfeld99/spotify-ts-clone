import { useEffect } from "react";
import useExplore from "../hooks/useExplore";

const ExplorePage = () => {
  const { fetchExplore, explorelist } = useExplore();

  useEffect(() => {
    // fetchExplore()
  }, []);
  return (
    <div className=" p-5">
      <h2 className=" text-2xl py-5 mt-3 text-accent font-semibold">
        {explorelist?.data?.title?.transformedLabel}
      </h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {explorelist?.sectionItems?.items?.map((item, i) => (
          <div
            key={i}
            style={{background:item?.content?.data?.data?.cardRepresentation?.backgroundColor?.hex}}
            className={`p-5 relative h-32 rounded-lg overflow-hidden`}
          >
            <div className=" text-xl text-accent font-semibold">
              {
                item?.content?.data?.data?.cardRepresentation?.title
                  ?.transformedLabel
              }
            </div>
            <img
            className=" rotate-[25deg] h-24 rounded shadow-sm shadow-[#00000075] aspect-square absolute bottom-0 right-0 object-cover -mr-4 -mb-2"
              src={
                item?.content?.data?.data?.cardRepresentation?.artwork
                  ?.sources[0] &&
                item?.content?.data?.data?.cardRepresentation?.artwork
                  ?.sources[0]?.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
