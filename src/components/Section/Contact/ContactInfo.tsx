import { Icon } from "@components/Ui";
import React from "react";
import "./ContactInfo.scss";
type ContactInfoProps = {
  onOpenModal: () => void;
};
export const ContactInfo: React.FC<ContactInfoProps> = ({ onOpenModal }) => {
  return (
    <div className="contact-info">
      <div className="header">
        <h2 className="animated-title">Contact Me</h2>
        <a onClick={() => onOpenModal()}>
          <Icon
            id="qrcodeIcon"
            style={{
              fill: "#d0d0d0",
              cursor: "pointer",
            }}
          />
        </a>
      </div>

      <hr />
      <ul>
        <li>
          <Icon
            id="mail"
            style={{
              fill: "#d0d0d0",
            }}
          />
          <a href="mailto:nikx.pro13@gmail.com">nikx.pro13@gmail.com</a>
        </li>
        <li>
          <Icon
            id="location"
            style={{
              fill: "#d0d0d0",
            }}
          />{" "}
          <span>Marseille, France</span>
        </li>
        <li>
          <Icon
            id="discord"
            style={{
              fill: "#d0d0d0",
            }}
          />
          <a href="https://discord.com/users/372925126808961025">@nikxpro</a>
        </li>
      </ul>
    </div>
  );
};
