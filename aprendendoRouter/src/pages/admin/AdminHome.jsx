import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
export function AdminHome() {
  return (
    <>
      <div className="containerHome">
        <h1>Seção home</h1>
        <p>Ola seja bem vindo a Loja de Eletronicos</p>
        <Link to={"/products"}>
          <button>Veja nossos produtos</button>
        </Link>
      </div>
    </>
  );
}
