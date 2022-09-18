import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { setProductToCart } from "redux/features/Cart";
import "./CartTotal.scss";

export default function CartTotal() {
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cartItems
    .reduce((acc, item) => acc + item.subtotal, 0)
    .toFixed(2);

  const checkoutHandler = () => {
    if (cartItems.length === 0) {
      alert("Please add some items to your cart");
    } else {
      dispatch(setProductToCart("reset"));
      navigate("/success");
    }
  };

  return (
    <div className="border p-4">
      <h1 className="fs-4 mb-4">Cart Totals</h1>
      <div className="d-flex justify-content-between border-bottom mb-2">
        <p className="fs-6">Subtotal</p>
        <p className="fs-6">${subtotal}</p>
      </div>

      <div className="d-flex justify-content-between">
        <p className="fs-5">Total</p>
        <p className="fs-5">${subtotal}</p>
      </div>

      <Button
        onClick={checkoutHandler}
        className="checkout round py-2 rounded-pill w-100 text-uppercase mt-3"
      >
        proceed to checkout
      </Button>
    </div>
  );
}
