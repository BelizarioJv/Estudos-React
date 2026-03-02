import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { AdminHome } from "./pages/admin/AdminHome";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Carts";
import { Product } from "./pages/Product";
import { About } from "./pages/About";
import { loadProduct } from "./loaders/products";
import { ProductBoundary } from "./error-boundaries/ProductBoundary";

const router = createBrowserRouter([
  {
    path: "/", // dentro de rootLayout (principal) vai ter as rotas produtos e cart
    element: <RootLayout />,
    children: [
      {
        index: true, // indicando que e a rota inicial da aplicaçao
        element: <AdminHome />, // pagina inicial e a home
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: "home",
            element: <AdminHome />,
          },
        ],
      },
      {
        path: "products/:productId",
        element: <Product />,
        loader: loadProduct, // chamando a funçao criada em loaders , pasta onde e criada as funçoes para carregar os dados necessarios para a rota
        errorElement: <ProductBoundary />, // pegandos as tratativas de erros criadas com o hook router
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/About",
    element: <About />,
  },
]);

export default router;
