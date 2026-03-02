import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

//funçao para usar o hook useContext assim criando um hook e faciliando o consumo das funçoes do estoque (usando o contexto do estoque)
export default function UseStock() {
  return useContext(StockContext);
}
