import { Outlet } from "react-router";
import Header from "./components/Header.jsx";
import { useState } from "react";
import addProductToCart from "./utils/addProductToCart.js";
import deleteProduct from "./utils/deleteProduct.js";

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

  return (
    <>
      <Header cart={cart} />
      <Outlet
        context={{ handleClearCart, handleDeleteCart, handleAddToCart, cart }}
      />
    </>
  );
}
