import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart((prev) => prev + 1);
  };

  return (
    <>
      <Sidebar cart={cart} />
      <Outlet context={{ addToCart, cart }} />
    </>
  );
}
