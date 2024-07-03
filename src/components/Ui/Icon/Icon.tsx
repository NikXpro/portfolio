import { createElement } from "react";

import arrowDown from "@assets/icons/arrowDown.svg?react";
import arrowForward from "@assets/icons/arrowForward.svg?react";
import dot from "@assets/icons/dot.svg?react";
import dotFull from "@assets/icons/dotFull.svg?react";
import download from "@assets/icons/download.svg?react";
import github from "@assets/icons/github.svg?react";
import arduino from "@assets/icons/language-tools/arduino.svg?react";
import css from "@assets/icons/language-tools/css.svg?react";
import express from "@assets/icons/language-tools/express.svg?react";
import figma from "@assets/icons/language-tools/figma.svg?react";
import git from "@assets/icons/language-tools/git.svg?react";
import html from "@assets/icons/language-tools/html.svg?react";
import javascript from "@assets/icons/language-tools/javascript.svg?react";
import json from "@assets/icons/language-tools/json.svg?react";
import linux from "@assets/icons/language-tools/linux.svg?react";
import lua from "@assets/icons/language-tools/lua.svg?react";
import nodejs from "@assets/icons/language-tools/nodejs.svg?react";
import postman from "@assets/icons/language-tools/postman.svg?react";
import python from "@assets/icons/language-tools/python.svg?react";
import react from "@assets/icons/language-tools/react.svg?react";
import sass from "@assets/icons/language-tools/sass.svg?react";
import typescript from "@assets/icons/language-tools/typescript.svg?react";
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
  lua,
  javascript,
  json,
  nodejs,
  react,
  sass,
  typescript,
  python,
  css,
  express,
  git,
  html,
  postman,
  arduino,
  linux,
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
