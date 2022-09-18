import { CartList, CartTotal } from "components";

export default function Cart() {
  return (
    <>
      <div className="mx-4 my-5">
        <div className="row g-5">
          <div className="col-12 col-md-8">
            <CartList />
          </div>
          <div className="col-12 col-md-4">
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  );
}
