import { GalleryContext } from "@components/Section/Gallery/GalleryContext";
import { useContext } from "react";

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
};
