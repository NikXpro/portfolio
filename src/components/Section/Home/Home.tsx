import "./Home.scss";

export type HomeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fullpageApi: any;
};

export const Home = ({ fullpageApi }: HomeProps) => {
  return (
    <div className="home">
      <h1 className="hero-title animated-title">
        <a className="second-line animated-title">"Building the Future,</a>
        <br />
        <a className="third-line animated-title">One Line at a Time"</a>
      </h1>
      <button className="scroll-button" onClick={() => fullpageApi.moveTo(2)}>
        Scroll down
      </button>
    </div>
  );
};
