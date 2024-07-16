import { useGallery } from "@components/Section/Gallery/useGallery";
import { Card } from "@components/Ui";
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
        title="Frontend"
        color="#6BB193"
        onClick={() => handleClick("frontend")}
      />
      <Card
        title="Backend"
        color="#145584"
        onClick={() => handleClick("backend")}
      />
      <Card
        title="Design"
        color="#8B4B4B"
        onClick={() => handleClick("design")}
      />
      <Card
        title="Modding"
        color="#72739D"
        onClick={() => handleClick("modding")}
      />
      <Card
        title="Tools"
        color="#DD7680"
        onClick={() => handleClick("tools")}
      />
      <Card
        title="Modelisations"
        color="#CAA5A7"
        onClick={() => handleClick("modelisations")}
      />
    </div>
  );
};
