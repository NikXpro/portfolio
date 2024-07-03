import { Icon } from "@components/Ui";
import { Card } from "@components/Ui/Card/Card";
import { useEffect, useState } from "react";
import "./GalleryProject.scss";
export type GalleryProjectProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fullpageApi: any;
};

export const GalleryProject = ({ fullpageApi }: GalleryProjectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0); // État pour l'index actuel


  const cards = {
    card1: [
      { title: "Card 1", color: "#6BB193" },
      { title: "Card 2", color: "#145584" },
      { title: "Card 3", color: "#8B4B4B" },
      { title: "Card 4", color: "#72739D" },
      { title: "Card 5", color: "#DD7680" },
      { title: "Card 6", color: "#CAA5A7" },
      { title: "Card 7", color: "#CAA5A7" },
      { title: "Card 8", color: "#CAA5A7" },
      { title: "Card 9", color: "#CAA5A7" },
      { title: "Card 10", color: "#CAA5A7" },
      { title: "Card 11", color: "#CAA5A7" },
      { title: "Card 12", color: "#CAA5A7" },
      { title: "Card 13", color: "#CAA5A7" },
      { title: "Card 14", color: "#CAA5A7" },
      { title: "Card 15", color: "#CAA5A7" },
      { title: "Card 16", color: "#CAA5A7" },
      { title: "Card 17", color: "#CAA5A7" },
      { title: "Card 18", color: "#CAA5A7" },
      { title: "Card 19", color: "#CAA5A7" },
      { title: "Card 20", color: "#CAA5A7" },
      { title: "Card 21", color: "#CAA5A7" },
      { title: "Card 22", color: "#CAA5A7" },
      { title: "Card 23", color: "#CAA5A7" },
      { title: "Card 24", color: "#CAA5A7" },
      { title: "Card 25", color: "#CAA5A7" },
      { title: "Card 26", color: "#CAA5A7" },
      { title: "Card 27", color: "#CAA5A7" },
      { title: "Card 28", color: "#CAA5A7" },
    ],
    card2: [
      { title: "Card 1", color: "#6BB193" },
      { title: "Card 2", color: "#145584" },
      { title: "Card 3", color: "#8B4B4B" },
      { title: "Card 4", color: "#72739D" },
      { title: "Card 5", color: "#DD7680" },
      { title: "Card 6", color: "#CAA5A7" },
      { title: "Card 6", color: "#CAA5A7" },
      { title: "Card 6", color: "#CAA5A7" },
      { title: "Card 6", color: "#CAA5A7" },
      { title: "Card 6", color: "#CAA5A7" },
      { title: "Card 6", color: "#CAA5A7" },
    ],
    card3: [],
    card4: [],
    card5: [],
    card6: [],
  };

  const cardsPerPage = 12;
  const totalPages = Math.ceil(
    cards[selectedId as keyof typeof cards].length / cardsPerPage
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const getGalleries = () => {
    const galleries = [];
    for (let i = 0; i < totalPages; i++) {
      const startIndex = i * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      galleries.push(
        cards[selectedId as keyof typeof cards].slice(startIndex, endIndex)
      );
    }
    return galleries;
  };

  const galleries = getGalleries();
  const showArrows =
    cards[selectedId as keyof typeof cards].length >= cardsPerPage;

  const haveCard = cards[selectedId as keyof typeof cards].length > 0;
  return (
    <div
      className="gallery-project"
      style={{ width: showArrows ? "75vw" : "65vw" }}
    >
      {showArrows && (
        <div className="left" onClick={handlePrev}>
          <Icon
            id="arrowForward"
            style={{
              transform: "rotate(180deg)",
            }}
          />
        </div>
      )}
      {haveCard ? (
        <div className="center">
          <div
            className="gallery"
            style={{
              transform: `translateX(-${currentIndex * (100 + 1.5 * 3.3)}%)`,
            }}
          >
            {galleries.map((gallery, galleryIndex) => (
              <div key={galleryIndex} className="gallery-page">
                {gallery.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    color={card.color}
                    onClick={() => fullpageApi.moveTo(galleryIndex)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>Aucune carte trouvée</h1>
      )}
      {showArrows && (
        <div className="right" onClick={handleNext}>
          <Icon id="arrowForward" />
        </div>
      )}
    </div>
  );
};
