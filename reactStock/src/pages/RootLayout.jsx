import { Link, Outlet } from "react-router-dom";
import Aside from "../components/Aside";
//Page responsavel por rederizar a aplicaçao pincipal
//O componente Outlet rederiza as paginas que sao filhas da rota , no caso de rootlayout , somente a Home

export default function RootLayout() {
  return (
    <>
      <Aside></Aside>
      <header>
        <Link to="/" className="logo">
          React Stock
        </Link>
        <nav>
          <Link to="/items">Items</Link>
        </nav>
      </header>
      <div className="mainRender">
        <Outlet></Outlet>
      </div>
      <footer>Feito com React e React Router! =D</footer>
    </>
  );
}
