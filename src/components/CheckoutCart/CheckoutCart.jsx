import styles from "./checkoutCart.module.css";
import pStyles from "../CartTable/cartTable.module.css";

function CheckoutCart({ cartTotal }) {
  return (
    <table className={styles.checkOutTable}>
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
          <td></td>
          <td>
            <button className={pStyles.btn}>Check Out</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default CheckoutCart;
