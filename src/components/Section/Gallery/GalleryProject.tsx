import Modal from "@components/Section/Gallery/Modal"; // Import de la modal
import { useGallery } from "@components/Section/Gallery/useGallery";
import { Card, Icon } from "@components/Ui";
import { useEffect, useState } from "react";
import "./GalleryProject.scss";

export type GalleryProjectProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fullpageApi: any;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GalleryProject = ({ fullpageApi }: GalleryProjectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { selectedId } = useGallery();
  const [showModal, setShowModal] = useState(false); // État pour la modal
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    color: string;
    description?: string;
    sourceCode?: string;
    technologies?: string[];
  } | null>(null); // État pour la carte sélectionnée

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedId]);

  const cards = {
    frontend: [
      {
        title: "Projet Booki",
        color: "#6BB193",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        sourceCode: "https://github.com/NikXpro/booki-app",
        technologies: ["html", "css", "figma"],
      },
      {
        title: "Card 2",
        color: "#145584",
        description: "Description 2",
        sourceCode: "",
      },
      { title: "Card 3", color: "#8B4B4B", description: "Description 3" },
      { title: "Card 4", color: "#72739D", description: "Description 4" },
      { title: "Card 5", color: "#DD7680", description: "Description 5" },
      { title: "Card 6", color: "#CAA5A7", description: "Description 6" },
      { title: "Card 7", color: "#CAA5A7", description: "Description 7" },
      { title: "Card 8", color: "#CAA5A7", description: "Description 8" },
      { title: "Card 9", color: "#CAA5A7", description: "Description 9" },
      { title: "Card 10", color: "#CAA5A7", description: "Description 10" },
      { title: "Card 11", color: "#CAA5A7", description: "Description 11" },
    ],
    backend: [
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
    design: [],
    modding: [],
    tools: [],
    modelisations: [],
  };

  const cardsPerPage = 12;
  const selectedCards = cards[selectedId as keyof typeof cards] || [];
  const totalPages = Math.ceil(selectedCards.length / cardsPerPage);

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
      galleries.push(selectedCards.slice(startIndex, endIndex));
    }
    return galleries;
  };

  const galleries = getGalleries();
  const showArrows = selectedCards.length >= cardsPerPage;
  const haveCard = selectedCards.length > 0;

  const handleCardClick = (card: { title: string; color: string }) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  return (
    <>
      <div
        className="gallery-project"
        style={{
          width: showArrows ? "70vw" : "60vw",
          alignItems: haveCard ? "start" : "center",
        }}
      >
        {haveCard ? (
          <div className="header">
            <Icon
              id="arrowForward"
              onClick={() => fullpageApi.moveSlideLeft()}
            />
            <h1>{`${selectedId}.`}</h1>
          </div>
        ) : null}
        {showArrows && (
          <div className="left" onClick={handlePrev}>
            <Icon
              id="arrowForward"
              style={{
                fill: "white",
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
                      onClick={() => handleCardClick(card)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>Aucune carte trouvée</h1>
            <button
              className="return-to-gallery"
              onClick={() => fullpageApi.moveSlideLeft()}
            >
              Return to gallery
            </button>
          </div>
        )}
        {showArrows && (
          <div className="right" onClick={handleNext}>
            <Icon id="arrowForward" />
          </div>
        )}
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          title={selectedCard?.title || ""}
          description={selectedCard?.description || ""}
          sourceCode={selectedCard?.sourceCode || ""}
          technologies={selectedCard?.technologies || []}
        />
      </div>
    </>
  );
};
