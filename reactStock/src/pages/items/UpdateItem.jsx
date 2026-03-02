import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock";
import { useParams } from "react-router-dom";

export default function AtualizarItem() {
  const { getItem } = useStock();
  const { id } = useParams();

  const item = getItem(id);
  return (
    <>
      <div className="UpdateItems">
        <ItemForm itemToUpdate={item}></ItemForm>
      </div>
    </>
  );
}
