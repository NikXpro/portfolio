import { Icon } from "@components/Ui";
import "./SocialNerwork.scss";

type NavItem = {
  id: string;
  path: string;
  newTab?: boolean;
};

const navList: NavItem[] = [
  { id: "github", path: "https://github.com/NikXpro", newTab: true },
  { id: "youtube", path: "https://www.youtube.com/@nikxpro", newTab: true },
  { id: "twitter", path: "", newTab: false },
  { id: "figma", path: "", newTab: false },
];

export const SocialNerwork = () => {
  return (
    <div className="pagination">
      {navList.map((navItem) => (
        <a
          key={navItem.id}
          href={navItem.path}
          target={navItem.newTab ? "_blank" : undefined}
          className={navItem.id}
        >
          <Icon id={navItem.id} />
        </a>
      ))}
    </div>
  );
};
