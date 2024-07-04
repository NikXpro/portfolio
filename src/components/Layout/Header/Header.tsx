import { Icon } from "@components/Ui";
import "./Header.scss";

type NavItem = {
  id: string;
  name: string;
  path: string;
  newTab?: boolean;
};

const navList: NavItem[] = [
  { id: "home", name: "Home", path: "#home" },
  { id: "about", name: "About", path: "#about" },
  { id: "gallery", name: "Gallery", path: "#gallery" },
  { id: "contact", name: "Contact", path: "#contact" },
];

export type HeaderProps = {
  pageActive?: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <header>
      <Icon id="logo" />
      <div className="menu">
        <div className="navbar">
          {navList.map((navItem) => (
            <a
              key={navItem.id}
              href={navItem.path}
              className={`nav-item ${
                props.pageActive === navItem.id ? "active" : ""
              }`}
              target={navItem.newTab ? "_blank" : undefined}
              rel={navItem.newTab ? "noopener noreferrer" : undefined}
            >
              {navItem.name}
            </a>
          ))}
        </div>
        <a key={"download"} className="download" href="">
          <Icon id="download" />
        </a>
      </div>
    </header>
  );
};
