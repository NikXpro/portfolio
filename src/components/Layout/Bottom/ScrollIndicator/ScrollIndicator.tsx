import { Icon } from "@components/Ui";
import "./ScrollIndicator.scss";

export const ScrollIndicator = () => {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-container">
        <div className="scroll-text">SCROLL DOWN</div>
        <Icon id="arrowDown" />
      </div>
    </div>
  );
};
