import style from "./style/app.module.css";
import Button from "./components/Button/index.jsx";
import { useState } from "react";
import Input from "./components/Input/Input.jsx";

function App() {
  const [senha, setSenha] = useState(" ");
  const [copiar, setCopiar] = useState("Copiar Senha");
  const [tamanhoSenha, setTamanhoSenha] = useState(12);
  const [tamanhoPadrao, setSenhaPadrao] = useState(12);
  const [mostrarSenha, setMostrarSenha] = useState(tamanhoPadrao);

  const passwordSizeDefault = mostrarSenha ? tamanhoSenha : 12;
  function gerarSenha() {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let senha = "";
    for (let i = 0; i < passwordSizeDefault; i++) {
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
          <Input
            idLabel="costumizarSenha"
            label="Costumizar tamanho da senha:"
            type="checkbox"
            id="showPassword"
            onChange={() => setMostrarSenha((currentState) => !currentState)}
          />

          {mostrarSenha ? (
            <Input
              label="Tamanho da Senha:"
              id="passwordSize"
              type="number"
              min="4"
              max="128"
              value={tamanhoSenha}
              onChange={(e) => setTamanhoSenha(e.target.value)}
            />
          ) : null}

          <Button
            texto={`Gerar Senha (${passwordSizeDefault} caracteres)`}
            onClick={() => gerarSenha()}
          />

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
