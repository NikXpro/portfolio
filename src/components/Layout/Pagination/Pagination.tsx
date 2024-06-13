import { Icon } from "@components/Ui";
import "./Pagination.scss";

type NavItem = {
  id: string;
  name: string;
  path: string;
};

const navList: NavItem[] = [
  { id: "home", name: "Accueil", path: "#home" },
  { id: "about", name: "À propos", path: "#about" },
  { id: "skills", name: "Compétences", path: "#skills" },
  { id: "gallery", name: "Galerie", path: "#gallery" },
  { id: "contact", name: "Contact", path: "#contact" },
];

export type PaginationProps = {
  pageActive?: string;
};

export const Pagination = (props: PaginationProps) => {
  return (
    <div className="pagination">
      {navList.map((navItem) => (
        <a
          key={navItem.id}
          href={navItem.path}
          className={navItem.id === props.pageActive ? "active" : ""}
        >
          {navItem.id === props.pageActive ? (
            <Icon id="dotFull" />
          ) : (
            <Icon id="dot" />
          )}
        </a>
      ))}
    </div>
  );
};
