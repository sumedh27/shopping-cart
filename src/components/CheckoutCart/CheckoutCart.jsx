function CheckoutCart({ cartTotal }) {
  return (
    <div>
      <h3>Estimated Costs</h3>
      <h3>SubTotal: Rs.{cartTotal}</h3>
      <h3>Tax: 0</h3>
      <h3>Estimated Total: Rs.{cartTotal}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default CheckoutCart;
