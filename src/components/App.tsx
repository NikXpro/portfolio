import { FullpageWrapper, Layout } from "@components/Layout";
import { GalleryProvider } from "@components/Section/Gallery/GalleryContext";
import React, { useState } from "react";
import "./App.scss";

const App: React.FC = () => {
  const [pageActive, setPageActive] = useState("home");

  return (
    <>
      <GalleryProvider>
        <Layout pageActive={pageActive} />
        <FullpageWrapper setPageActive={setPageActive} />
      </GalleryProvider>
    </>
  );
};

export default App;
