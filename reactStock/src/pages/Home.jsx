import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";

export default function Home() {
  const { items } = useStock();

  //pegando o total de itens no estoque pelo tamanho do array de items
  const diversity = items.length;

  //quantidade total de itens em estoqyue usando o metodo reduce(para cada item do array ele vai pega a quantidade e somar)
  const inventoryTotal = items.reduce((sum, item) => +sum + +item.quantity, 0);

  //funçao para pegar os itens adicionados nos ultimos 10dias , usando o metodo FILTER(para pegar os itens que satisfazem a condiçao criada)
  const today = new Date();
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 10);
  const recentItems = items.filter(
    (item) => item.createdAt >= limitDate && item.createdAt <= today,
  );
  const recentTotal = recentItems.length;

  //funçao para pegar os itens com quantidade baixa usando o metodo FILTER
  const lowQuantityItems = items.filter((item) => item.quantity < 10);
  const lowQuantityTotal = lowQuantityItems.length;

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="dashboard-card">
          Diversidade de itens
          <span>{diversity}</span>
        </div>
        <div className="dashboard-card">
          Inventário total
          <span>{inventoryTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens recentes
          <span>{recentTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens acabando
          <span>{lowQuantityTotal}</span>
        </div>
      </div>
      <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr>
                <th>Itens Recentes</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {recentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <Link to={`/items/${item.id}`} className="button is-small">
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Itens acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lowQuantityItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Link to={`/items/${item.id}`} className="button is-small">
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
