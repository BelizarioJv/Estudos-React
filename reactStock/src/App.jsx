import { RouterProvider } from "react-router-dom";
import StockContextProvider from "./contexts/StockContext";
import router from "./router";

//no App apenas a o hook RouterProvider para puxar as rotas da aplicaçao
//tudo que fizer dentro de StockContext vai poder ser usado no App pois esta sendo passada pela funçao StockContexProvider

export default function App() {
  return (
    <>
      <StockContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </StockContextProvider>
    </>
  );
}
