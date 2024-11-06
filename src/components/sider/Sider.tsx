import { useState } from "react";
import { GoArrowRight, GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import CardList from "./cardSider/CardList";
import Tooltip from "../../utils/Tooltip";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";

const Sider = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [hoveredElement, setHoveredElement] = useState<string>("");

  const handleToggleTooltip = (element: string) => {
    setHoveredElement(element);
  };
  const { pathname } = useLocation();

  return (
    <div className=" flex flex-col ">
      <div
        className={`flex flex-col gap-2 flex-grow ${
          open ? "w-[300px]" : "w-fit"
        }`}
      >
        <header
          className={`bg-secondary p-4 rounded-lg ${
            !open && "w-fit items-center px-6"
          }`}
        >
          <ul className="flex flex-col gap-4">
            <Link to={"/"}>
              <li
                className={` relative flex items-center gap-4 cursor-pointer font-semibold hover:text-accent ${
                  pathname === "/" ? " text-accent" : "text-neutral"
                }`}
              >
                <GoHomeFill
                  onMouseEnter={() => handleToggleTooltip("home")}
                  onMouseLeave={() => handleToggleTooltip("")}
                  className="text-2xl"
                />
                {!open && (
                  <Tooltip
                    show={hoveredElement === "home"}
                    position={" top-0 px-2 py-1 left-9"}
                  >
                    home
                  </Tooltip>
                )}

                {open && <span> Home</span>}
              </li>
            </Link>
            <Link to={"/search"}>
              <li
                onMouseEnter={() => handleToggleTooltip("search")}
                onMouseLeave={() => handleToggleTooltip("")}
                className={`relative flex items-center gap-4 cursor-pointer font-semibold hover:text-accent ${
                  pathname.includes("/search") ? "text-accent" : "text-neutral"
                }`}
              >
                <div className=" relative">
                  {pathname.includes("/search") && (
                    <div className=" w-[9px] h-[9px] top-[6.5px] left-[6.5px] absolute bg-accent rounded-full"></div>
                  )}
                  <FiSearch className="text-2xl" />
                </div>
                {open && <span>Search</span>}
                {!open && (
                  <Tooltip
                    show={hoveredElement === "search"}
                    position={" top-0 px-2 py-1 left-9"}
                  >
                    search
                  </Tooltip>
                )}
              </li>
            </Link>
          </ul>
        </header>
        <main
          className={`bg-secondary rounded-t-lg flex flex-col w-full flex-grow ${
            !open && "w-fit items-center"
          }`}
        >
          <div className="p-4 gap-4 flex flex-col">
            <div className="flex items-center justify-between font-semibold text-neutral">
              <div
                onMouseEnter={() => handleToggleTooltip("library")}
                onMouseLeave={() => handleToggleTooltip("")}
                className=" relative flex items-center gap-4 cursor-pointer hover:text-accent"
                onClick={() => setOpen(!open)}
              >
                <BiLibrary className="text-2xl" />
                {open && <span>Your Library</span>}
                {open ? (
                  <Tooltip
                    show={hoveredElement === "library"}
                    position={" bottom-9 px-2 py-1 left-0"}
                  >
                    collapse your library
                  </Tooltip>
                ) : (
                  <Tooltip
                    show={hoveredElement === "library"}
                    position={" top-0 px-2 py-1 left-9"}
                  >
                    expand your library
                  </Tooltip>
                )}
              </div>
              {open && (
                <div className="flex items-center gap-4 ">
                  <GoPlus className="text-2xl hover:text-accent cursor-pointer" />
                  <GoArrowRight className="text-2xl hover:text-accent cursor-pointer" />
                </div>
              )}
            </div>
            {open && (
              <div className="flex items-center gap-2">
                <button className="btn btn-sm bg-btn_sidebar hover:bg-btn_sidebar_hover rounded-2xl font-semibold text-sm py-1.5 text-accent p-2.5">
                  Playlist
                </button>
                <button className="btn btn-sm bg-btn_sidebar hover:bg-btn_sidebar_hover rounded-2xl font-semibold text-sm py-1.5 text-accent p-2.5">
                  Podcasts & Shows
                </button>
              </div>
            )}
          </div>
          {/* Card sider playlists */}
        </main>
      </div>
      <div className={`h-full overflow-y-auto scroll-container bg-secondary rounded-b-lg`}>
      <CardList open={open} />

      </div>
    </div>
  );
};

export default Sider;
