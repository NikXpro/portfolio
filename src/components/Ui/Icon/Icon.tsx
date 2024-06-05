import { createElement } from "react";

//import Exemple from "@assets/icons/Exemple.svg?react";

const icons = {
  //Exemple,
};

type IconProps = {
  id: string;
  style?: React.CSSProperties;
};

export function Icon({ id, style }: IconProps) {
  return createElement(icons[id as keyof typeof icons] || "svg", {
    className: "icon",
    style: style,
  });
}
