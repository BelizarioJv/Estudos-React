import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import ItemsLayout from "./pages/items/Layout";
import ListItems from "./pages/items/ListItems";
import ShowItems from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import CreateItem from "./pages/items/CreateItem";

//1° -criar as rotas com base nas funcionalidades do projeto (items/criarItem,Listar items(tabela com todos os items) , Mostrar Item(Pagina do item especifico q foi acessado) , atualizar items(pagina para atualizar item)
//RootLayout para comportar a aplicaçao e /item/Layout para layout quando for rederizar funcionalidades de items
//pagina home no caminho inical '/' e items como filhos com outros filhos
//depois criar as pages...

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/items",
        element: <ItemsLayout />,
        children: [
          { index: true, element: <ListItems /> },
          { path: "new", element: <CreateItem /> },
          { path: ":id", element: <ShowItems /> },
          { path: ":id/update", element: <UpdateItem /> },
        ],
      },
    ],
  },
]);

export default router;
