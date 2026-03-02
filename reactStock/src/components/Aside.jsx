import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  const [showAside, setShowAside] = useState(false);

  return (
    <div>
      <button onClick={() => setShowAside(!showAside)}>
        {showAside ? "Fechar Aside" : "Abrir Aside"}
      </button>

      {showAside && (
        <aside
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            width: "250px",
            height: "100%",
            background: "#a04c4c",
            padding: "20px",
            boxShadow: "-2px 0 5px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <h2>Menu Lateral</h2>

          <Link to={`./`} className="button is-small">
            Menu principal
          </Link>

          <Link to={`./items`} className="button is-small">
            Items
          </Link>

          <Link to="/items/new">Novo Item</Link>
        </aside>
      )}
    </div>
  );
}
