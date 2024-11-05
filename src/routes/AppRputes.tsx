import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sider from "../components/sider/Sider";
import SongControler from "../components/songConrcoler/SongControler";
import Nav from "../components/nav/Nav";
import ArtistDetaile from "../pages/ArtistDetaile";

const AppRputes = () => {


  return (
    <div className=" bg-primary select-none h-screen w-full overflow-hidden flex flex-col gap-2 p-2">
      <BrowserRouter>
        <div className=" relative w-full flex flex-grow gap-2 overflow-x-hidden rounded-lg">
          <Sider />
          <div
            className={`scroll-container relative bg-secondary w-full flex-grow rounded-lg overflow-y-auto overflow-x-hidden`}
          >
            {/* Navigation in content */}
            <Nav />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/artist/:artistId" element={<ArtistDetaile />} />
              <Route
                path="/*"
                element={
                  <div className=" text-accent text-center py-20">
                    Not found!
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
        <SongControler />
      </BrowserRouter>
    </div>
  );
};

export default AppRputes;
