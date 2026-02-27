import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

//layout principal da aplicaçao onde utliza o componente heeader com os links . Outlet e para rederizar as paginas que foram passadas na rota
export function RootLayout() {
  return (
    <>
      <div className="app">
        <Header></Header>
        <main>
          <h1>Loja de Produtos eletronicos</h1>
          <hr />
          <Outlet></Outlet>
          <footer>
            <p>Feito com react router DOM </p>
          </footer>
        </main>
      </div>
    </>
  );
}
