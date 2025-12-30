import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem.jsx";

export default function Cart() {
  const { cart, handleDeleteCart, handleClearCart, handleUpdateQuantity } =
    useOutletContext();

  const style = {
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(min(350px,100%),1fr))",
    gap: "30px",
  };
  return (
    <main style={style}>
      {cart.length > 0 ? (
        <>
          {/* <button type="button" onClick={handleClearCart}>
            Clear Cart
          </button> */}
          {cart.map((cartItem) => (
            <CartItem
              cartItem={cartItem}
              key={cartItem.id}
              handleDeleteCart={handleDeleteCart}
              handleUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </>
      ) : (
        <h1>
          <i>No items in cart</i>
        </h1>
      )}
    </main>
  );
}
