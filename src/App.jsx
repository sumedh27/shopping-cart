import { Outlet } from "react-router";
import Header from "./components/Header.jsx";
import { useState } from "react";
import addProductToCart from "./utils/addProductToCart.js";

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id, quantity) => {
    addProductToCart(setCart, id, quantity);
  };

  return (
    <>
      <Header cart={cart} />
      <Outlet context={{ handleAddToCart, cart }} />
    </>
  );
}
