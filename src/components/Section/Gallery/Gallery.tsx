import { useGallery } from "@components/Section/Gallery/useGallery";
import { Card } from "@components/Ui/Card/Card";
import "./Gallery.scss";

export type GalleryProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fullpageApi: any;
};

export const Gallery = ({ fullpageApi }: GalleryProps) => {
  const { setSelectedId } = useGallery();

  const handleClick = (id: string) => {
    setSelectedId(id);
    fullpageApi.moveSlideRight();
  };

  return (
    <div className="gallery">
      <Card
        title="Card 1"
        color="#6BB193"
        onClick={() => handleClick("card1")}
      />
      <Card
        title="Card 2"
        color="#145584"
        onClick={() => handleClick("card2")}
      />
      <Card
        title="Card 3"
        color="#8B4B4B"
        onClick={() => handleClick("card3")}
      />
      <Card
        title="Card 4"
        color="#72739D"
        onClick={() => handleClick("card4")}
      />
      <Card
        title="Card 5"
        color="#DD7680"
        onClick={() => handleClick("card5")}
      />
      <Card
        title="Card 6"
        color="#CAA5A7"
        onClick={() => handleClick("card6")}
      />
    </div>
  );
};
