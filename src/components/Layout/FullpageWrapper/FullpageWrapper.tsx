import { Gallery, Section } from "@components/Section";
import { GalleryProject } from "@components/Section/Gallery/GalleryProject";
import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

export type FullpageWrapperProps = {
  setPageActive: (page: string) => void;
};

export const FullpageWrapper: React.FC<FullpageWrapperProps> = (
  props: FullpageWrapperProps
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const onLeave = (_origin: any, destination: any, _direction: any): void => {
    const pageIds: string[] = ["home", "about", "skills", "gallery", "contact"];
    props.setPageActive(pageIds[destination.index]);
  };

  return (
    <ReactFullpage
      anchors={["home", "about", "skills", "gallery", "contact"]}
      menu="#menu"
      controlArrows={false}
      onLeave={onLeave}
      credits={{ enabled: false }}
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Section style={{}}>
                <h1>Home</h1>
              </Section>
            </div>
            <div className="section">
              <Section style={{}}>
                <h1>About</h1>
              </Section>
            </div>
            <div className="section">
              <Section style={{}}>
                <h1>Skills</h1>
              </Section>
            </div>
            <div className="section">
              <div className="slide">
                <Section style={{ flexDirection: "column" }}>
                  <Gallery fullpageApi={fullpageApi} />
                </Section>
              </div>
              <div className="slide">
                <Section style={{ flexDirection: "column" }}>
                  <GalleryProject fullpageApi={fullpageApi} />
                </Section>
              </div>
              <div className="slide">
                <Section style={{ flexDirection: "column" }}>
                  <h1>Gallery Sub 2</h1>
                  <button onClick={() => fullpageApi.moveSlideLeft()}>
                    Go to Slide 2
                  </button>{" "}
                </Section>
              </div>
            </div>
            <div className="section">
              <Section style={{ width: "100vw" }}>
                <h1>Contact</h1>
              </Section>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
