export const animateTitle = (title: string) => {
  return title.split("").map((_, index) => (
    <span
      key={index}
      className="animated-letter"
      style={{ "--animation-order": index } as React.CSSProperties}
    >
      {title[index] === " " ? "\u00A0" : title[index]}
    </span>
  ));
};
