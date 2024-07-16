import { Icon } from "@components/Ui";
import React from "react";
import "./Modal.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  description: string;
  sourceCode: string;
  technologies: string[];
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  description,
  sourceCode,
  technologies,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <Icon id="close" onClick={onClose} />
          </div>

          <div className="modal-body">
            <div className="left-container">
              <p className="description">{description}</p>
            </div>
            <div className="right-container">
              <img
                className="project-image"
                src={
                  "https://word-dev-portfolio.com/wp-content/uploads/elementor/thumbs/Booki-qi14jj5b94iowhm7upcj9p11sl1ux502jw53us79f4.webp"
                }
                alt="Project"
              />
              {sourceCode && (
                <button
                  className="codesource"
                  onClick={() => window.open(sourceCode, "_blank")}
                >
                  Source code
                </button>
              )}
              <div className="technologies-list">
                {technologies.map((technology) => (
                  <div key={technology} className="item">
                    <Icon id={technology} style={{ fill: "white" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
