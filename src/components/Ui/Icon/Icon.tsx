import { createElement } from "react";

import arrowDown from "@assets/icons/arrowDown.svg?react";
import arrowForward from "@assets/icons/arrowForward.svg?react";
import dot from "@assets/icons/dot.svg?react";
import dotFull from "@assets/icons/dotFull.svg?react";
import download from "@assets/icons/download.svg?react";
import figma from "@assets/icons/figma.svg?react";
import github from "@assets/icons/github.svg?react";
import logo from "@assets/icons/logo.svg?react";
import qrcode from "@assets/icons/qrcode.svg?react";
import twitter from "@assets/icons/twitter.svg?react";
import youtube from "@assets/icons/youtube.svg?react";

const icons = {
  arrowDown,
  dot,
  dotFull,
  download,
  figma,
  github,
  logo,
  twitter,
  youtube,
  arrowForward,
  qrcode,
};

type IconProps = {
  id: string;
  style?: React.CSSProperties;
};

export function Icon({ id, style }: IconProps) {
  return createElement(icons[id as keyof typeof icons] || "svg", {
    className: `icon ${id}`,
    style: style,
  });
}
