function CheckoutCart({ cartTotal }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="row" colSpan="2">
            Estimated Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Cost</th>
          <td>Rs. {cartTotal}</td>
        </tr>
        <tr>
          <th scope="row">Tax</th>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Total Cost</th>
          <td>Rs. {cartTotal}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="2">
            <button>Check Out</button>
          </th>
        </tr>
      </tfoot>
    </table>
  );
}

export default CheckoutCart;
