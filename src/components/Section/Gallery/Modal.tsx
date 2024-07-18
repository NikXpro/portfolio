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
  preview: string;
  image?: string;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  description,
  sourceCode,
  preview,
  technologies,
  image,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <Icon id="close" onClick={onClose} />
          </div>

          <div className="modal-body">
            <div className="left-container">
              <p className="description">{description}</p>
            </div>
            <div className="right-container">
              {image && (
                <div className="project-image-container">
                  <img
                    className="project-image"
                    src={`/images/${image}`}
                    alt="Project"
                    style={{
                      filter: preview ? undefined : "brightness(1)",
                      cursor: preview ? "pointer" : "default",
                    }}
                    onClick={
                      preview ? () => window.open(preview, "_blank") : undefined
                    }
                  />
                  {preview && <Icon id="open" />}
                </div>
              )}
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
