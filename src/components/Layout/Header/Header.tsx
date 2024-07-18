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
  const handleDownload = () => {
    const filePath = "/docs/CV_Nathan.pdf";

    const link = document.createElement("a");
    link.href = filePath;
    link.download = "CV_Nathan.pdf";
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };

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
        <div key={"download"} className="download" onClick={handleDownload}>
          <Icon id="download" />
        </div>
      </div>
    </header>
  );
};
