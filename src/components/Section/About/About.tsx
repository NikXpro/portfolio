import { BarChartNoPadding, Icon } from "@components/Ui";
import { useAnimateTitle } from "@hooks/useAnimateTitle";
import "./About.scss";

const languageTools = [
  { id: "lua", name: "Lua" },
  { id: "python", name: "Python" },
  { id: "javascript", name: "JavaScript" },
  { id: "typescript", name: "TypeScript" },
  { id: "html", name: "HTML" },
  { id: "css", name: "CSS" },
  { id: "sass", name: "Sass" },
  { id: "figma", name: "Figma" },
  { id: "postman", name: "Postman" },
  { id: "git", name: "Git" },
  { id: "react", name: "React" },
  { id: "nodejs", name: "Node.js" },
  { id: "json", name: "JSON" },
  { id: "arduino", name: "Arduino" },
  { id: "linux", name: "Linux" },
];

export type AboutProps = {
  pageActive: string;
};

export const About = ({ pageActive }: AboutProps) => {
  useAnimateTitle(pageActive, "about");

  return (
    <div className="about">
      <div className="container-left">
        <div className="description">
          <div className="head">
            <h2 className="title animated-title">
              I am a passionate developer.
            </h2>
            <hr className="separator" />
          </div>
          <p className="description-text">
            "Hi! I'm Nathan, a web developer with two years of experience. I
            started with LUA on FiveM and now specialize in React. I enjoy
            creating intuitive and attractive user interfaces, and I also love
            3D modeling. I'm always looking for new challenges and aim to design
            innovative solutions. Thanks for visiting my portfolio!"
          </p>
        </div>

        <div className="stats">
          <div className="head">
            <div className="title-container">
              <h2 className="title animated-title">Code Metrics</h2>
              <a href="https://github.com/NikXpro/github_stats" target="_blank">
                <Icon
                  id="code"
                  style={{
                    fill: "white",
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>
            <hr className="separator" />
          </div>
          <BarChartNoPadding />
        </div>
      </div>
      <div className="container-right">
        <div className="head">
          <h2 className="title animated-title">Tools and languages</h2>
          <hr className="separator" />
        </div>

        <div className="list">
          {languageTools.map((tool) => (
            <div key={tool.id} className="item">
              <Icon id={tool.id} style={{ fill: "white" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
