import CartItem from "../CartItem/CartItem";

function ListCart({
  cart,
  handleDeleteCart,
  handleUpdateQuantity,
  handleClearCart,
}) {
  return (
    <div>
      <div>
        <h2>Cart ({cart.length} items)</h2>
        <button type="button" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {cart.map((cartItem) => (
        <CartItem
          cartItem={cartItem}
          key={cartItem.id}
          handleDeleteCart={handleDeleteCart}
          handleUpdateQuantity={handleUpdateQuantity}
        />
      ))}
    </div>
  );
}

export default ListCart;
