import "./Section.scss";

export type SectionProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Section = (props: SectionProps) => {
  return (
    <div
      style={{
        ...props.style,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  );
};
