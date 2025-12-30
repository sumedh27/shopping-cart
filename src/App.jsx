import { Outlet } from "react-router";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import addProductToCart from "./utils/addProductToCart.js";
import deleteProduct from "./utils/deleteProduct.js";
import updateQuantity from "./utils/updateQuantity.js";

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

  return (
    <>
      <Header cart={cart} />
      <Outlet
        context={{
          handleUpdateQuantity,
          handleClearCart,
          handleDeleteCart,
          handleAddToCart,
          cart,
        }}
      />
    </>
  );
}
