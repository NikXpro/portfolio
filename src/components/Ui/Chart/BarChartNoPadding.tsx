import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./BarChartNoPadding.scss";

const languageData = {
  "JavaScript": 11976,
  "Total": 43166,
  "TypeScript": 4659,
  "Sass": 3737,
  "JSON": 1826,
  "HTML": 3372,
  "SVG": 858,
  "CSS": 4324,
  "Python": 403,
  "Lua": 9153,
  "Plain Text": 75,
  "SQL": 0
};

const data = [
  { name: "lua", label: "Lua", Ligne: languageData.Lua, color: "#00007c" },
  {
    name: "python",
    label: "Python",
    Ligne: languageData.Python,
    color: "#ffce41",
  },
  {
    name: "javascript",
    label: "JS",
    Ligne: languageData.JavaScript,
    color: "#f0dc55",
  },
  // Ajout des entrées manquantes
  {
    name: "typescript",
    label: "TS",
    Ligne: languageData.TypeScript,
    color: "#3178c6",
  },
  { name: "html", label: "HTML", Ligne: languageData.HTML, color: "#e4552d" },
  { name: "css", label: "CSS", Ligne: languageData.CSS, color: "#254bdd" },
  { name: "sass", label: "Sass", Ligne: languageData.Sass, color: "#cf649a" },
  { name: "json", label: "JSON", Ligne: languageData.JSON, color: "#b2b2b2" },
  // Utilisation de valeurs statiques pour les langages non inclus dans les données initiales
  //{
  //  name: "c++",
  //  label: "C++",
  //  Ligne: languageData["C++"] | 0,
  //  color: "#6a9dd3",
  //},
  //{ name: "c#", label: "C#", Ligne: languageData["C#"] | 0, color: "#ab73e3" },
  //{
  //  name: "rust",
  //  label: "Rust",
  //  Ligne: languageData.Rust | 0,
  //  color: "#c5000b",
  //},
  //{ name: "go", label: "Go", Ligne: languageData.Go | 0, color: "#34beb2" },
];

export const BarChartNoPadding: React.FC = () => {
  return (
    <div className="barchart-container">
      <ResponsiveContainer width="100%" height={"100%"}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 0, right: 2, left: 0, bottom: 0 }}
          barSize={20}
        >
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip
            itemStyle={{ color: "white" }}
            contentStyle={{
              color: "white",
              backgroundColor: "#2e2e2e",
              border: "none",
              borderRadius: "10px",
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Ligne">
            {data.map(
              (entry, index) =>
                entry.Ligne > 0 && (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                )
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
