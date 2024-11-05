import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SpotifyContextProvider } from "./context/SpotifyContext.tsx";


createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <SpotifyContextProvider>
      <App />
    </SpotifyContextProvider>
  </React.Fragment>
);
