export default function CartItem({ cartItem, handleDeleteCart }) {
  return (
    <div>
      <h1>{cartItem.title}</h1>
      <p>{cartItem.price}</p>
      <p>{cartItem.quantity}</p>
      <button type="button" onClick={() => handleDeleteCart(cartItem.id)}>
        Remove from cart
      </button>
    </div>
  );
}
