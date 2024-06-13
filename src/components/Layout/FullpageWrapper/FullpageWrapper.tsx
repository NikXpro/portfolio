// src/components/FullpageWrapper.tsx
import { Section } from "@components/Section";
import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

export const FullpageWrapper: React.FC = () => {
  return (
    <ReactFullpage
      anchors={["home", "about", "skills", "gallery", "contact"]}
      menu="#menu"
      controlArrows={false}
      sectionsColor={["#ff9999", "#99ccff", "#99ff99", "#ffff99"]}
      credits={{ enabled: false }}
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Section style={{ backgroundColor: "#ff9999" }}>
                <h1>Home</h1>
              </Section>
            </div>
            <div className="section">
              <Section style={{ backgroundColor: "#99ccff" }}>
                <h1>About</h1>
              </Section>
            </div>
            <div className="section">
              <Section style={{ backgroundColor: "#99ff99" }}>
                <h1>Skills</h1>
              </Section>
            </div>
            <div className="section">
              <div className="slide" style={{ backgroundColor: "#ffcc99" }}>
                <h1>Gallery</h1>
                <button onClick={() => fullpageApi.moveSlideRight()}>
                  Go to Slide 2
                </button>
              </div>
              <div className="slide" style={{ backgroundColor: "#cc99ff" }}>
                <h1>Gallery Sub</h1>
                <button onClick={() => fullpageApi.moveSlideLeft()}>
                  Go to Slide 1
                </button>
              </div>
            </div>
            <div className="section">
              <Section style={{ backgroundColor: "#ffff99", width: "100vw" }}>
                <h1>Contact</h1>
              </Section>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
