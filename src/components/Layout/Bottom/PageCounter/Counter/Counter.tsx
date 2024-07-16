import "./Counter.scss";

export const Counter = ({ selectedId }: { selectedId: string }) => {
  const numberList = [
    { id: "home", number: "1" },
    { id: "about", number: "2" },
    { id: "gallery", number: "3" },
    { id: "contact", number: "4" },
  ];

  const currentIndex = numberList.findIndex((item) => item.id === selectedId);

  return (
    <div className="counter">
      <div
        className="numbers"
        style={{
          transform: `translateY(calc(-${currentIndex} * (6.25vw + 1.25vw)))`,
        }}
      >
        {numberList.map((item, index) => (
          <div key={index} className="number">
            {item.number}
          </div>
        ))}
      </div>
    </div>
  );
};
