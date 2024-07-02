import "./Card.scss";

export type CardProps = {
  title: string;
  color: string;
  image?: string;
  onClick?: () => void; // Added callback function for click
  style?: React.CSSProperties; // Added style property
};

export const Card = ({ title, color, image, onClick, style }: CardProps) => {
  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: color, ...style }}
        onClick={onClick}
      >
        {image && <img src={image} alt={title} />}
        <h2>{title}</h2>
      </div>
    </>
  );
};
