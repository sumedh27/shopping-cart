export default function CartItem({ cartItem }) {
  return (
    <div>
      <h1>{cartItem.title}</h1>
      <p>{cartItem.price}</p>
      <p>{cartItem.quantity}</p>
    </div>
  );
}
