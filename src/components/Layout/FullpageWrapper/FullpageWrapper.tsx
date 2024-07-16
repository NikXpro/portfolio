import { Gallery, Section } from "@components/Section";
import { About } from "@components/Section/About/About";
import { Contact } from "@components/Section/Contact/Contact";
import { GalleryProject } from "@components/Section/Gallery/GalleryProject";
import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

export type FullpageWrapperProps = {
  setPageActive: (page: string) => void;
  pageActive: string;
};

export const FullpageWrapper: React.FC<FullpageWrapperProps> = (
  props: FullpageWrapperProps
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const onLeave = (_origin: any, destination: any, _direction: any): void => {
    const pageIds: string[] = ["home", "about", "gallery", "contact"];
    props.setPageActive(pageIds[destination.index]);
  };

  return (
    <ReactFullpage
      anchors={["home", "about", "gallery", "contact"]}
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
                <About pageActive={props.pageActive} />
              </Section>
            </div>
            <div className="section">
              <div className="slide">
                <Section style={{}}>
                  <Gallery fullpageApi={fullpageApi} />
                </Section>
              </div>
              <div className="slide">
                <Section style={{}}>
                  <GalleryProject fullpageApi={fullpageApi} />
                </Section>
              </div>
            </div>
            <div className="section">
              <Section style={{ width: "100vw" }}>
                <Contact
                  fullpageApi={fullpageApi}
                  pageActive={props.pageActive}
                />
              </Section>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
