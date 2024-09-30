import React from "react";
import Product from "./Product";

function MainProducts(props) {
  const { productData } = props;
  return (
    <>
      <div className="container">
        <h3 className="mt-3">Products</h3>
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
