import { Icon } from "@components/Ui";
import "./ScrollIdicator.scss";

export const ScrollIdicator = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-text">SCROLL DOWN</div>
      <Icon id="arrowDown" />
    </div>
  );
};
