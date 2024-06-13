// src/App.tsx
import { FullpageWrapper, Header } from "@components/Layout";
import React from "react";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div>
      <div className="layout">
        <Header pageActive={"home"} />
        <div className="center">
          <div className="pagination"></div>
          <div className="socialnetwork"></div>
        </div>
      </div>

      <FullpageWrapper />
    </div>
  );
};

export default App;
