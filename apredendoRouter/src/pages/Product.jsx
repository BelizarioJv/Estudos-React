import { Link, useParams } from "react-router-dom";
import products from "../database.json";

// Usando o componente Link para criar o botao de voltar para a pagina de produtos

//pegando os parametros da Url que foi pedida no routes com "useParams"
//usando o metodo "find" para percorre products e retorna o elemento que satisfaz a funçao de callback(vendo o id do produto e conferindo no databse(+ é para converter o id em number))
export function Product() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === +productId);

  if (!product) {
    return <h2>Oops... Esse produto não foi encontrado =</h2>;
  }

  return (
    <section className="Product">
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <div className="infoProduct">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>R$ {product.price}</p>
        <button className="btnBuy">Comprar</button>
      </div>
    </section>
  );
}
