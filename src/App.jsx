import Header from "./components/Header/Header.jsx";
import { useEffect, useReducer, useState } from "react";
import addProductToCart from "./utils/addProductToCart.js";
import deleteProduct from "./utils/deleteProduct.js";
import updateQuantity from "./utils/updateQuantity.js";
import Page from "./route/Page.jsx";
import { stateReducer } from "./utils/stateReducer.js";
import useFetchGetReq from "./hooks/useFetchGetReq.jsx";

export default function App() {
  const initialState = { products: [], cart: [] };
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [cart, setCart] = useState([]);

  const { products, isLoading, error } = useFetchGetReq();

  useEffect(() => {
    if (!isLoading && products) {
      dispatch({ type: "INIT_PRODUCTS", payload: products });
    }
  }, [isLoading, products]);

  const handleAddToCart = (products, id, quantity) => {
    addProductToCart(setCart, products, id, quantity);
  };

  const handleDeleteCart = (id) => {
    deleteProduct(setCart, id);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    updateQuantity(setCart, id, newQuantity);
  };

  const propsForPages = {
    handleUpdateQuantity,
    handleClearCart,
    handleDeleteCart,
    handleAddToCart,
    cart,
    products: state.products,
    isLoading,
    error,
    // cart: state.cart,
  };

  return (
    <>
      <Header cart={cart} />
      <Page {...propsForPages} />
    </>
  );
}
