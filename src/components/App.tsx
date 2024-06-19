import { FullpageWrapper, Layout } from "@components/Layout";
import React, { useState } from "react";
import "./App.scss";

const App: React.FC = () => {
  const [pageActive, setPageActive] = useState("home");

  return (
    <>
      <Layout pageActive={pageActive} />
      <FullpageWrapper setPageActive={setPageActive} />
    </>
  );
};

export default App;
