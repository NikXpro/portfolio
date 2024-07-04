import React, { ReactNode } from "react";
import "./IconsBackground.scss";

interface Props {
  children: ReactNode;
}

const IconsBackground: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="background" />
      <div className="content">{children}</div>
    </>
  );
};

export default IconsBackground;
