import { Link } from "react-router-dom";

import "./Success.scss";

export default function Success() {
  return (
    <div className="d-flex flex-column mt-4 align-items-center justify-content-center">
      <p className="fs-2">Thank you for your purchase</p>
      <Link to="/" className="more-products-btn mt-3  py-2 px-3 rounded-pill">
        See more products
      </Link>
    </div>
  );
}
