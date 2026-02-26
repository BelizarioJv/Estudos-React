import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Home } from "./pages/Home";
import { AdminHome } from "./pages/admin/AdminHome";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Carts";

const router = createBrowserRouter([
  {
    path: "/", // dentro de rootLayout (principal) vai ter as rotas produtos e cart
    element: <RootLayout />,
    children: [
      {
        index: true, // indicando que e a rota inicial da aplicaçao
        element: <Home />, // pagina inicial e a home
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
]);

export default router;
