import { Counter } from "@components/Layout/Bottom/PageCounter/Counter";
import "./PageCounter.scss";

export type PageCounterProps = {
  selectedId: string;
};

export const PageCounter = (props: PageCounterProps) => {
  return (
    <div className="counter">
      <div className="number">
        <div className="zero">0</div>
        <Counter selectedId={props.selectedId} />
      </div>
      <div className="line"></div>
    </div>
  );
};
