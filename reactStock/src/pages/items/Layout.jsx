import { Outlet, Link, useLocation } from "react-router-dom";

export default function IntemsLayout() {
  const { pathname } = useLocation();
  return (
    <main>
      <h1>Stock Items</h1>
      <nav className="tabs">
        <Link
          to="/items"
          className={`tab ${pathname === "/items" ? "active" : ""}`}>
          Todos os Itens
        </Link>
        <Link
          to="/items/new"
          className={`tab ${pathname === "/items/new" ? "active" : ""}`}>
          Novo Item
        </Link>
      </nav>
      <Outlet></Outlet>
    </main>
  );
}
