import style from "./style/app.module.css";
import Button from "./components/Button/index.jsx";
import { useState } from "react";

function App() {
  const [senha, setSenha] = useState(" ");
  const [copiar, setCopiar] = useState("Copiar Senha");

  function gerarSenha() {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let senha = "";
    for (let i = 0; i < 12; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setSenha(senha);
  }
  function copiarSenha() {
    navigator.clipboard.writeText(senha);
    setCopiar("Senha Copiada!");
  }
  function limparSenha() {
    console.log("Limpar senha");
    setSenha("");
    setCopiar("Copiar Senha");
  }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Gerador de Senha</h1>
        <div className={style.content}>
          <Button texto="Gerar Senha" onClick={() => gerarSenha()} />

          <Button
            texto="Limpar Senha"
            onClick={() => {
              limparSenha();
            }}
          />

          <Button
            texto={copiar}
            onClick={() => {
              copiarSenha();
            }}
          />
          <p>{senha}</p>
        </div>
      </div>
    </>
  );
}

export default App;
