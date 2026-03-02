import { useState } from "react";
import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";
import "../index.css";

export default function ItemsTable() {
  const { items, findItensByCategory } = useStock();
  const [filterType, setFilterType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Obter categorias únicas de todos os items
  const categories = [...new Set(items.map((item) => item.category))];

  // Função para aplicar filtro/ordenação
  const getFilteredItems = () => {
    let filtered = [...items];

    if (filterType === "category" && selectedCategory !== "") {
      filtered = findItensByCategory(selectedCategory);
    }

    if (filterType === "id") {
      filtered.sort((a, b) => a.id - b.id);
    }

    if (filterType === "name") {
      filtered.sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name),
      );
    }

    return filtered;
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="table-container">
      {/* Controle de filtros */}
      <div className="filters">
        <label>Visualizar por: </label>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">Todos</option>
          <option value="id">ID</option>
          <option value="category">Categoria</option>
          <option value="name">Nome</option>
        </select>

        {filterType === "category" && (
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Todas</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        )}

        {filterType === "name" && (
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        )}
      </div>

      {/* Tabela */}
      <table>
        <thead className="styled-table">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Em Estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity} unid.</td>
              <td>{item.category}</td>
              <td className="tdButton">
                <button className="Btn">
                  <Link
                    to={`/items/${item.id}`}
                    className="button is-primary is-small">
                    Ver
                  </Link>
                </button>
                <button>
                  <Link
                    to={`/items/${item.id}/update`}
                    className="button is-small">
                    Atualizar
                  </Link>
                </button>
                <DeleteButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
