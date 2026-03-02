import { Link, useParams } from "react-router-dom";
import useStock from "../../hooks/useStock";
import DeleteButton from "../../components/DeleteButton";

//Pegando a funçao getItem do contexto hook UseStock para pegar item e salvando ele na variavel item
//useParams para poder usar os parametros que foram passados pela url (no caso o)

export default function ShowItem() {
  const { getItem } = useStock();
  const { id } = useParams();

  const item = getItem(id);

  return (
    <div className="item">
      <h2>{item.name}</h2>
      <div className="actionsItem">
        <button>
          <Link to={`/items/${item.id}/update`} className="buttonis-small">
            Atualizar
          </Link>
        </button>
        <DeleteButton itemId={item.id} itemName={item.name} />
      </div>
      <div className="row">
        <span>Categoria: {item.category}</span>
        <span>Quantidade em estoque: {item.quantity}</span>
        <span>Preço: R$ {item.price}</span>
      </div>
      <p>{item.description}</p>
      <div className="row">
        <p>Cadastrado em: {item.createdAt.toDateString()}</p>
        <p>Atualizado em: {item.updatedAt.toDateString()}</p>
      </div>
    </div>
  );
}
