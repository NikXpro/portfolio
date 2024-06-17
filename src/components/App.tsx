import {
  FullpageWrapper,
  Header,
  PageCounter,
  Pagination,
  ScrollIdicator,
  SocialNerwork,
} from "@components/Layout";
import React, { useState } from "react";
import "./App.scss";

const App: React.FC = () => {
  const [pageActive, setPageActive] = useState("home");

  return (
    <>
      <div className="layout">
        <Header pageActive={pageActive} />
        <div className="center">
          <Pagination pageActive={pageActive} />
          <SocialNerwork />
        </div>
        <div className="bottom">
          <PageCounter selectedId={pageActive} />
          <ScrollIdicator />
        </div>
      </div>
      <FullpageWrapper setPageActive={setPageActive} />
    </>
  );
};

export default App;
