import { useState } from "react";
import { Form } from "react-router";

export default function ProductItem({ products, product, handleAddToCart }) {
  const [value, setValue] = useState(1);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => {
      if (prev === 1 || !prev) return prev;

      return prev - 1;
    });
  };

  return (
    <div id="product-card">
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <form>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={value}
          onChange={handleOnChange}
          min="1"
        />
        <button type="button" onClick={handleIncrement}>
          increment
        </button>
        <button type="button" onClick={handleDecrement}>
          decrement
        </button>
        <button
          type="button"
          onClick={() => {
            handleAddToCart(products, product.id, value);
            setValue(1);
          }}
        >
          Add to cart
        </button>
      </form>
    </div>
  );
}
