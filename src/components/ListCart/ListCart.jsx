import CartItem from "../CartItem/CartItem";

function ListCart(props) {
  const { cart, deleteFromCart, decrementFromCart, addToCart, resetCart } =
    props;

  const IteratedCartItems = cart.map((cartItem) => (
    <CartItem
      cartItem={cartItem}
      key={cartItem.id}
      deleteFromCart={deleteFromCart}
      decrementFromCart={decrementFromCart}
      addToCart={addToCart}
    />
  ));

  return (
    <div>
      <div>
        <h2>Cart ({cart.length} items)</h2>
        <button type="button" onClick={resetCart}>
          Clear Cart
        </button>
      </div>
      {IteratedCartItems}
    </div>
  );
}

export default ListCart;
