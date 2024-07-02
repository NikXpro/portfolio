import "./Card.scss";

export type CardProps = {
  title: string;
  color: string;
  image?: string;
  onClick: () => void; // Added callback function for click
};

export const Card = (props: CardProps) => {
  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: props.color }}
        onClick={props.onClick}
      >
        {props.image && <img src={props.image} alt={props.title} />}
        <h2>{props.title}</h2>
      </div>
    </>
  );
};
