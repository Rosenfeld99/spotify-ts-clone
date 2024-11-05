import React from "react";
import "./App.css";
import useAlboms from "./hooks/useAlboms";
import AppRputes from "./routes/AppRputes";
import { motion } from "framer-motion";

function App() {
  const { error, loading } = useAlboms();

  console.log(error);

  if (error && error != "") return <div className="bg-primary h-screen w-full text-accent flex items-center justify-center">Error : {error}</div>;

  return (
    <React.Fragment>
      {
      // loading ? (
      //   <div className="bg-primary h-screen w-full text-accent flex items-center justify-center">
      //     <motion.div
      //       initial={{ opacity: 0, scale: 0 }}
      //       animate={{ opacity: 1, scale: 1 }}
      //       className="flex items-center justify-center"
      //     >
      //       Loading...{" "}
      //       <img className="w-14" src="/loadingGifGreen.gif" alt="" />
      //     </motion.div>
      //   </div>
      // ) : (
        <AppRputes />
      // )
      }
    </React.Fragment>
  );
}

export default App;
