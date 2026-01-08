import { useCallback, useEffect, useReducer } from "react";
import { stateReducer } from "./utils/stateReducer.js";
import useFetchGetReq from "./hooks/useFetchGetReq.jsx";
import Header from "./components/Header/Header.jsx";
import Page from "./route/Page.jsx";

export default function App() {
  const initialState = { products: [], cart: [] };
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const { products, isLoading, error } = useFetchGetReq();

  useEffect(() => {
    if (!isLoading && products) {
      dispatch({ type: "INIT_PRODUCTS", payload: products });
    }
  }, [isLoading, products]);

  const addToCart = useCallback(
    (payload) => dispatch({ type: "ADD_TO_CART", payload }),
    []
  );

  const deleteFromCart = useCallback(
    (payload) => dispatch({ type: "DELETE_FROM_CART", payload }),
    []
  );

  const decrementFromCart = useCallback(
    (payload) => dispatch({ type: "DECREMENT_FROM_CART", payload }),
    []
  );

  const resetCart = useCallback((payload) => {
    dispatch({ type: "RESET_CART", payload });
  }, []);

  const propsForPages = {
    products: state.products,
    cart: state.cart,
    addToCart,
    deleteFromCart,
    decrementFromCart,
    resetCart,
    isLoading,
    error,
  };

  return (
    <>
      <Header cart={state.cart} />
      <Page {...propsForPages} />
    </>
  );
}
