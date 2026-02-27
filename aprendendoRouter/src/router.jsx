import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { AdminHome } from "./pages/admin/AdminHome";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Carts";
import { Product } from "./pages/Product";
import { About } from "./pages/About";

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
      },
      {
        path: "products/:productId",
        element: <Product />,
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
