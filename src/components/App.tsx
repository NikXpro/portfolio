import {
  FullpageWrapper,
  Header,
  PageCounter,
  Pagination,
  ScrollIndicator,
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
          <ScrollIndicator />
        </div>
      </div>
      <FullpageWrapper setPageActive={setPageActive} />
    </>
  );
};

export default App;
