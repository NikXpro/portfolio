// src/App.tsx
import { FullpageWrapper, Header, Pagination } from "@components/Layout";
import React, { useState } from "react";
import "./App.scss";

const App: React.FC = () => {
  const [pageActive, setPageActive] = useState("home");

  return (
    <div>
      <div className="layout">
        <Header pageActive={pageActive} />
        <div className="center">
          <Pagination pageActive={pageActive} />
          <div className="socialnetwork"></div>
        </div>
      </div>

      <FullpageWrapper setPageActive={setPageActive} />
    </div>
  );
};

export default App;
