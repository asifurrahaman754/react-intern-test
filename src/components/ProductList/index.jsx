import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

import Product from "data.js";
import ProductActions from "./ProductActions";
import "./ProductList.scss";

export default function ProductList() {
  const { category, attribute, searchValue } = useSelector(
    (state) => state.Product
  );

  let filteredProductsArr = [];
  Product.forEach((product) => {
    // filtered by category
    if (product.category === category || !category) {
      filteredProductsArr = [...filteredProductsArr, ...product.products];

      // filter by attribute
      if (attribute.name) {
        let filterProductsByAttribute = [];
        filteredProductsArr.forEach((product) => {
          if (product[attribute.name] === attribute.value || !attribute.value) {
            filterProductsByAttribute.push(product);
          }
        });

        filteredProductsArr = filterProductsByAttribute;
      }
    }
  });

  //filter the products based on search value
  if (searchValue) {
    let filterProductsBySearch = [];
    filteredProductsArr.forEach((product) => {
      if (product.title.toLowerCase().includes(searchValue.toLowerCase())) {
        filterProductsBySearch.push(product);
      }
    });

    filteredProductsArr = filterProductsBySearch;
  }

  return (
    <div className="px-4 mt-5 py-4">
      <Table bordered size="sm" className="productList-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Color</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {filteredProductsArr.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  className="productlist-image d-block mx-auto"
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td className="name">{product.title}</td>
              <td className="color">{product.color}</td>
              <td
                className={`${
                  product.stock > 0 ? "text-success" : "text-danger"
                }`}
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </td>
              <td>${product.price}</td>
              <td className="list-action d-flex align-items-center px-4">
                <ProductActions product={product} />
              </td>
            </tr>
          ))}

          {filteredProductsArr.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
