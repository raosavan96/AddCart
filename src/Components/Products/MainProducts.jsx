import React from "react";
import Product from "./Product";

function MainProducts(props) {
  const { productData } = props;
  return (
    <>
      <h2>Products</h2>
      <div className="container">
        <div>
          <div className="row">
            {productData.map((value, index) => (
              <Product data={value} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainProducts;
