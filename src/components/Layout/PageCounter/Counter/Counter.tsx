import "./Counter.css";

export const Counter = ({ selectedId }: { selectedId: string }) => {
  const numberList = [
    { id: "home", number: "1" },
    { id: "about", number: "2" },
    { id: "skills", number: "3" },
    { id: "gallery", number: "4" },
    { id: "contact", number: "5" },
  ];

  const currentIndex = numberList.findIndex((item) => item.id === selectedId);

  return (
    <div className="counter">
      <div
        className="numbers"
        style={{
          transform: `translateY(calc(-${currentIndex} * (6.25rem + 1.25rem)))`,
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
