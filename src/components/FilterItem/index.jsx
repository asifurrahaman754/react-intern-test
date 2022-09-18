import { useState } from "react";

import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";

import { setCategory, setAttribute } from "redux/features/Product";
import products from "data.js";
import "./FilterItem.scss";

export default function FilterItem() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  //filter attribute by selected category
  const selectedAttribute = products.filter(
    (item) => item.category === selectedCategory
  );
  const attribute = selectedAttribute[0]?.attribute;

  const selectCategory = (e) => {
    setSelectedCategory(e.target.value);
    dispatch(setCategory(e.target.value));
    dispatch(setAttribute({}));
  };

  const handleClickAttr = (e) => {
    dispatch(setAttribute({ name: attribute.name, value: e.target.value }));
  };

  const reset = () => {
    if (selectedCategory) {
      setSelectedCategory("");
      dispatch(setCategory(""));
      dispatch(setAttribute({}));
    }
  };

  return (
    <div className="d-flex align-items-center">
      <Form.Select
        aria-label="Default select example"
        onChange={selectCategory}
        value={selectedCategory}
      >
        <option value="">select category</option>
        {products.map(({ category }) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Form.Select>

      {attribute ? (
        <Form.Select
          aria-label="Default select example"
          onChange={handleClickAttr}
          className="mx-2"
        >
          <option value="">{attribute.name}</option>
          {attribute.items.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      ) : (
        <Form.Select aria-label="Default select example" className="mx-2">
          <option>----</option>
        </Form.Select>
      )}

      <button onClick={reset} className="reset">
        <img src="/assets/icons/reset.svg" alt="reset icon" />
        Reset
      </button>
    </div>
  );
}
