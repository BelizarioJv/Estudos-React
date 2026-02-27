import { Link } from "react-router-dom";
import products from "../database.json";

//pagina de produtos , pegamdo os produtos do database e usando a funçao MAP para criar o layout para cada produto
export function Products() {
  return (
    <section className="containerProducts">
      <h2>Todos os produtos</h2>
      <p>Confira todas as nossas ofertas.</p>
      <section>
        <h3>Processadores</h3>
        <ul className="products">
          {products.map((product) => (
            <li key={product.id}>
              <h4>{product.name}</h4>
              <p>R$ {product.price}</p>
              <Link to={`/products/${product.id}`}>
                <button>Ver</button>
              </Link>
              <button>Compras</button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
