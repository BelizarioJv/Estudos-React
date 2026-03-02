import { useNavigate } from "react-router-dom";
import useStock from "../hooks/useStock";
import PropTypes from "prop-types";

//Componete do butao com funaço deletar um item do estoque , usando recurso do navegador(confirm) , props para te acesso ao Id e nome do item e usando hook useNavigate para que depois que o item for excluido ir para a pagina desejada
DeleteButton.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      deleteItem(itemId);
      navigate("/items");
    }
  };

  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Excluir
    </button>
  );
}
