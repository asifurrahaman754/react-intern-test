import { useCallback } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { setSearchValue } from "redux/features/Product";
import "./ActionItem.scss";

export default function ActionItem() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  // impelmented debouncing for search
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, delay);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memorizeHandleChange = useCallback(debounce(handleChange, 500), []);

  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center me-4">
        <span className="me-2">Search:</span>
        <Form.Control type="search" onChange={memorizeHandleChange} />
      </div>
      <Button className="addtocartBtn">
        <Link to="/cart/checkout">Add To Cart</Link>
      </Button>
    </div>
  );
}
