import { createContext, useState } from "react";
import PropTypes from "prop-types";

//uso do hook createContext para compartilhar o contexto do componente do estoque em outros componentes
//Usando o estado para manipula os itens , setando os itens que vieram do local storage no caso , primeiro verificando se e existente , pegando os dados por JSON(parse = converte os dados em objeto) e pra cada item colocando a data de hoje usando Date
//funçao add Item pegando o item setando usando o [item que foi adicionado , ... todos os itens que ja tinha](stringfy para converter em JSON)
//Imaginou o objeto item como = {name,description,quantity,price,category,createdAt,updatedAt}

export const StockContext = createContext({});

StockContextProvider.PropTypes = {
  children: PropTypes.node,
};

export default function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("obc-react-stock");
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.updatedAt = new Date(item.updatedAt);
    });
    return items;
  });

  const addItem = (item) => {
    setItems((current) => {
      const updatedItems = [item, ...current];
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const getItem = (itemId) => {
    return items.find((i) => i.id === +itemId);
  };

  const updateItem = (itemId, newAttributes) => {
    setItems((current) => {
      const itemIndex = current.findIndex((i) => i.id === itemId);
      const updatedItems = [...current];
      Object.assign(updatedItems[itemIndex], newAttributes, {
        updatedAt: new Date(),
      });
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const deleteItem = (itemId) => {
    setItems((current) => {
      const updatedItems = current.filter((item) => item.id !== itemId);
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const findItensByCategory = (category) => {
    return items.filter((item) => item.category === category);
  };

  const stock = {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem,
    findItensByCategory,
  };
  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
