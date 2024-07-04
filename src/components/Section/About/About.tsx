import { BarChartNoPadding, Icon } from "@components/Ui";
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

export const About = () => {
  return (
    <div className="about">
      <div className="container-left">
        <div className="description">
          <h2 className="description-title">I am a passionate developer.</h2>
          <hr className="separator" />
          <p className="description-text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos."
          </p>
        </div>

        <div className="stats">
          <BarChartNoPadding />
        </div>
      </div>
      <div className="container-right">
        <h2 className="tool-title">Tools and languages</h2>
        <hr className="separator" />

        <div className="list">
          {languageTools.map((tool) => (
            <div key={tool.id} className="item">
              <Icon
                id={tool.id}
                style={{ width: "4rem", height: "4rem", fill: "white" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
