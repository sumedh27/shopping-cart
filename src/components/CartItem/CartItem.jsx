import { useEffect, useState } from "react";

export default function CartItem({
  cartItem,
  handleDeleteCart,
  handleUpdateQuantity,
}) {
  const [value, setValue] = useState(cartItem.quantity);

  useEffect(() => {
    if (value !== cartItem.quantity) {
      handleUpdateQuantity(cartItem.id, value);
    }
  }, [value, cartItem, handleUpdateQuantity]);

  const handleOnChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => Math.max(1, prev - 1));
  };

  return (
    <div>
      <h1>{cartItem.title}</h1>
      <p>{cartItem.price}</p>
      <form>
        <label htmlFor="cartQuantity">Quantity: </label>
        <input
          type="number"
          id="cartQuantity"
          name="cartQuantity"
          value={value}
          onChange={handleOnChange}
          min="1"
        />
        <button type="button" onClick={handleIncrement}>
          increment
        </button>
        <button
          type="button"
          onClick={() => {
            handleDecrement();
            handleUpdateQuantity(cartItem.id, value);
          }}
        >
          decrement
        </button>
        <button type="button" onClick={() => handleDeleteCart(cartItem.id)}>
          Remove from cart
        </button>
      </form>
    </div>
  );
}
