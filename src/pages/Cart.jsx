import ListCart from "../components/ListCart/ListCart.jsx";
import CheckoutCart from "../components/CheckoutCart/CheckoutCart.jsx";

export default function Cart(props) {
  const { cart, deleteFromCart, decrementFromCart, addToCart, resetCart } =
    props;

  const getCartTotal = (cart) => {
    let total = 0;
    for (let product of cart) {
      total += product.price;
    }

    return +(total * 90).toFixed(3);
  };

  const cartTotal = getCartTotal(cart);

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
          <ListCart
            cart={cart}
            deleteFromCart={deleteFromCart}
            decrementFromCart={decrementFromCart}
            addToCart={addToCart}
            resetCart={resetCart}
          />
          <CheckoutCart cartTotal={cartTotal} />
        </>
      ) : (
        <h1>
          <i>No items in cart</i>
        </h1>
      )}
    </main>
  );
}
