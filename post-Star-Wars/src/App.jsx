import Card from "./components/Card/index.jsx";
import swPosterImg from "./assets/star-wars-poster.jpg";
import esbPosterImg from "./assets/esb-poster.webp";
import rotjPosterImg from "./assets/rotj-poster.webp";

export default function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" poster={swPosterImg} />
      <Card title="Pôster: Empire Strikes Back (1980)" poster={esbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" poster={rotjPosterImg} />
    </>
  );
}
