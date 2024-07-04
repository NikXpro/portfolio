import { ContactForm } from "@components/Section/Contact/ContactForm";
import { ContactInfo } from "@components/Section/Contact/ContactInfo";
import { QrCodeModal } from "@components/Section/Contact/QrCodeModal";
import { useEffect, useState } from "react";
import "./Contact.scss";

export type ContactProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fullpageApi: any;
};

export const Contact = ({ fullpageApi }: ContactProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (fullpageApi) {
      if (isModalOpen) {
        fullpageApi.setAllowScrolling(false);
      } else {
        fullpageApi.setAllowScrolling(true);
      }
    }
  }, [isModalOpen, fullpageApi]);

  return (
    <div className="contact">
      <div className="container">
        <ContactForm />
        <ContactInfo onOpenModal={() => setIsModalOpen(true)} />
        <QrCodeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};
