import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import addProductToCart from "./utils/addProductToCart.js";
import deleteProduct from "./utils/deleteProduct.js";
import updateQuantity from "./utils/updateQuantity.js";

import Page from "./route/Page.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

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
  };

  return (
    <>
      <Header cart={cart} />
      <Page {...propsForPages} />
    </>
  );
}
