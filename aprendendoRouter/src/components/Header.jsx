import { Link } from "react-router-dom";
// Link e um componente para substituir a tag ancora do HTML(a)
export function Header() {
  return (
    <header>
      <nav style={{ display: "flex", gap: "2rem" }}>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/About">Sobre</Link>
      </nav>
    </header>
  );
}
