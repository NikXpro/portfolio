import cardsData from "@assets/project.json"; // Import du fichier JSON
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
    preview?: string;
    image?: string;
  } | null>(null); // État pour la carte sélectionnée

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedId]);

  const cards = cardsData; // Utilisation des données du fichier JSON

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
          preview={selectedCard?.preview || ""}
          image={selectedCard?.image || ""}
        />
      </div>
    </>
  );
};
