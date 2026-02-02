import { useRoutes } from "react-router";

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Search from "../components/Search/Search";

function Page(props) {
  const {
    cart,
    products,
    isLoading,
    error,
    addToCart,
    deleteFromCart,
    decrementFromCart,
    resetCart,
    search,
    setSearch,
  } = props;

  return useRoutes([
    { path: "*", element: <ErrorPage /> },
    { path: "/", element: <Home /> },
    {
      path: "/shop",
      element: (
        <Shop
          products={products}
          isLoading={isLoading}
          error={error}
          addToCart={addToCart}
          search={search}
          setSearch={setSearch}
        />
      ),
    },
    {
      path: "/cart",
      element: (
        <Cart
          cart={cart}
          deleteFromCart={deleteFromCart}
          decrementFromCart={decrementFromCart}
          addToCart={addToCart}
          resetCart={resetCart}
        />
      ),
    },
  ]);
}

export default Page;
