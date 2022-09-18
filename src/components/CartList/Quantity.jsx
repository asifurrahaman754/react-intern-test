import { useDispatch } from "react-redux";
import { changeProductQuantity } from "redux/features/Cart";
import { useState, useEffect } from "react";

export default function Quantity({ quantity, id }) {
  const [quantityValue, setQuantityValue] = useState(quantity);
  const dispatch = useDispatch();

  //recalculate total price when quantity changes
  useEffect(() => {
    dispatch(changeProductQuantity({ id: id, quantity: quantityValue }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantityValue]);

  const changeQuantity = (sign) => {
    if (sign === "-" && quantityValue === 1) return;

    setQuantityValue((prevQuantity) => {
      if (sign === "+") {
        return prevQuantity + 1;
      } else if (sign === "-") {
        return prevQuantity - 1;
      }
    });
  };

  return (
    <div className="quantity-wrapper border p-2 d-flex justify-content-between align-items-center mx-auto">
      <button className="quantity-btn" onClick={() => changeQuantity("-")}>
        -
      </button>
      <span>{quantityValue}</span>
      <button className="quantity-btn" onClick={() => changeQuantity("+")}>
        +
      </button>
    </div>
  );
}
