import React, { ReactNode, createContext, useState } from "react";

type GalleryContextType = {
  selectedId: string;
  setSelectedId: (id: string) => void;
};

export const GalleryContext = createContext<GalleryContextType | undefined>(
  undefined
);

type GalleryProviderProps = {
  children: ReactNode;
};

export const GalleryProvider: React.FC<GalleryProviderProps> = ({
  children,
}) => {
  const [selectedId, setSelectedId] = useState<string>("card1");

  return (
    <GalleryContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </GalleryContext.Provider>
  );
};
