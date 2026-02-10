import Link from "./components/Link/index.jsx";
import Text from "./components/Text/index.jsx";
import ProfileImg from "./assets/joao.jpg";
import style from "./style/app.module.css";
import { useState } from "react";

function mainText() {
  return "Sou João Victor Belizario dos Santos, estudante de Desenvolvimento de Sistemas e entusiasta de tecnologia, interessado no impacto que soluções digitais podem gerar no ambiente empresarial.";
}

export default function App() {
  const [textContent, setTextContent] = useState(() => mainText());
  function handleTextClick(event) {
    event.target.style.color = "blue";
    setTextContent("Texto alterado ao clicar!");
  }
  return (
    <>
      <div className={style.container}>
        <img src={ProfileImg} alt="Joao-Belizairo" />

        <Text text={textContent} id="text1" onClick={handleTextClick} />
        <Text text="Atualmente, estou explorando práticas modernas de desenvolvimento, como CI/CD, testes automatizados, modelagem de dados e consumo de APIs REST, enquanto amplio minha experiência com bibliotecas como React e frameworks como Next.js, que potencializam a criação de interfaces escaláveis e de alta performance."></Text>
        <Text text="Sempre aberto a novos desafios e aprendizados, tenho como objetivo evoluir continuamente e gerar valor para as equipes e organizações das quais fizer parte."></Text>

        <Link
          text="LinkedIn"
          link="https://www.linkedin.com/in/joao-belizario-9b1a4b1b3/"
        />
        <Link text="GitHub" link="https://github.com/BelizarioJv" />
      </div>
    </>
  );
}
