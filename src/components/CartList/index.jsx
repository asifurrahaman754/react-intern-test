import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";

import { removeProductFromCart } from "redux/features/Cart";
import Quantity from "./Quantity";
import "./CartList.scss";

export default function CartList() {
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const dispatch = useDispatch();

  return (
    <Table size="sm" className="cartItems-table">
      <thead className="text-center">
        <tr>
          <th width="450">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((product) => (
          <tr key={product.id}>
            <td width="450" className="d-flex align-items-center py-4">
              <img
                className="cartList-cross"
                src="/assets/icons/cross.svg"
                alt="cross icon"
                onClick={() => dispatch(removeProductFromCart(product.id))}
              />
              <img
                className="cartList-image mx-3"
                src={product.image}
                alt={product.title}
              />
              <h3 className="productlist-title">{product.title}</h3>
            </td>
            <td>${product.price}</td>
            <td>
              <Quantity quantity={product.quantity} id={product.id} />
            </td>
            <td className="subtotal">${product.subtotal}</td>
          </tr>
        ))}

        {cartItems.length === 0 && (
          <tr>
            <td colSpan="6" className="text-center">
              No cart items found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
