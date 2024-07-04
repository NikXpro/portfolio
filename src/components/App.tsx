import { FullpageWrapper, Layout } from "@components/Layout";
import { GalleryProvider } from "@components/Section/Gallery/GalleryContext";
import IconsBackground from "@components/Ui/Icon/IconsBackground";
import React, { useState } from "react";
import "./App.scss";

const App: React.FC = () => {
  const [pageActive, setPageActive] = useState("home");

  return (
    <>
      <GalleryProvider>
        <IconsBackground>
          <Layout pageActive={pageActive} />
          <FullpageWrapper setPageActive={setPageActive} />
        </IconsBackground>
      </GalleryProvider>
    </>
  );
};

export default App;
