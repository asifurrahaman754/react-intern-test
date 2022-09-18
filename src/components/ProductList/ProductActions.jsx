import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { setProductToCart } from "redux/features/Cart";

export default function ProductActions({ product }) {
  const [productQuantity, setProductQuantity] = useState(1);
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    if (productInCart()) return;

    const { id, title, price, image } = product;
    const quantity = Number(productQuantity);

    //create a product object containing the product details
    const productObj = {
      id,
      title,
      price,
      image,
      quantity,
      subtotal: price * quantity,
    };
    dispatch(setProductToCart(productObj));
  };

  //check if the product is already in the cart
  const productInCart = () => {
    return cartItems.find((item) => item.id === product.id);
  };

  return (
    <>
      <Form.Control
        min="1"
        className="list-action-input"
        type="number"
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
      />
      <Button className="list-action-addtocartBtn ms-2 me-auto px-3">
        <img src="/assets/icons/cart.svg" alt="cart icon" />
      </Button>
      <Form.Check
        checked={productInCart() ? true : false}
        onChange={addProductToCart}
        aria-label="option 1"
      />
    </>
  );
}
