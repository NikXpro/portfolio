import { useEffect } from "react";

// Ajout de la fonction wait
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useAnimateTitle = (pageActive: string, sectionName: string) => {
  useEffect(() => {
    wait(140).then(() => {
      if (pageActive === sectionName) {
        const titles = document.querySelectorAll(
          `.${sectionName} .animated-title`
        );
        titles.forEach((title) => {
          if (!title.textContent) return; // Ajout d'une vérification pour textContent
          const letters = title.textContent.split("");
          title.innerHTML = "";
          letters.forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter === " " ? "\u00A0" : letter;
            span.style.setProperty("--animation-order", index.toString());
            span.classList.add("animated-letter");
            title.appendChild(span);
          });
        });
      }
    });
  }, [pageActive, sectionName]);
};
