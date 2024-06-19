import { PageCounter, ScrollIndicator } from "@components/Layout/Bottom";
import { Pagination, SocialNerwork } from "@components/Layout/Center";
import { Header } from "@components/Layout/Header";
import "./Layout.scss";
export type LayoutProps = {
  pageActive: string;
};

export const Layout = (props: LayoutProps) => {
  return (
    <div className="layout">
      <Header pageActive={props.pageActive} />
      <div className="center">
        <Pagination pageActive={props.pageActive} />
        <SocialNerwork />
      </div>
      <div className="bottom">
        <PageCounter selectedId={props.pageActive} />
        <ScrollIndicator />
      </div>
    </div>
  );
};
