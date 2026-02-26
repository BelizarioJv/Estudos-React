import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

//layout principal da aplicaçao onde utliza o componente heeader com os links . Outlet e para rederizar as paginas que foram passadas na rota
export function RootLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <p>
          Esse e o Layout Principal.Abaixo esta o conteudo dinamico de cada rota
        </p>
        <hr />
        <Outlet></Outlet>
        <footer>
          <p>Feito com react router DOM </p>
        </footer>
      </main>
    </>
  );
}
