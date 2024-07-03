import { Icon } from "@components/Ui";
import { BarChartNoPadding } from "@components/Ui/Chart/BarChartNoPadding";
import "./Skills.scss";

export type SkillsProps = {
  data?: [];
};

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

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-container__content">
        <div className="skills-container__content__chart">
          <BarChartNoPadding />
        </div>
        <div className="skills-container__content__language-tools">
          <h2>Language and Tools</h2>
          <div className="skills-container__content__language-tools__list">
            {languageTools.map((tool) => (
              <div className="skills-container__content__language-tools__list__item">
                <Icon
                  id={tool.id}
                  style={{ width: 55, height: 55, fill: "white" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
