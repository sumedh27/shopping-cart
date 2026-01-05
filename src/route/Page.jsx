import { useRoutes } from "react-router";

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";

function Page(props) {
  const {
    handleUpdateQuantity,
    handleClearCart,
    handleDeleteCart,
    handleAddToCart,
    cart,
  } = props;

  return useRoutes([
    { path: "*", element: <ErrorPage /> },
    { path: "/", element: <Home /> },
    {
      path: "/shop",
      element: <Shop handleAddToCart={handleAddToCart} />,
    },
    {
      path: "/cart",
      element: (
        <Cart
          cart={cart}
          handleClearCart={handleClearCart}
          handleDeleteCart={handleDeleteCart}
          handleUpdateQuantity={handleUpdateQuantity}
        />
      ),
    },
  ]);
}

export default Page;
