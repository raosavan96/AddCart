import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

function MainProducts(props) {
  const { productData } = props;
  const wishProducts = useSelector((state) => state.wish.value);

  return (
    <>
      <div className="container">
        <h3 className="mt-3">Products</h3>
        <div>
          <div className="row">
            {productData.map((value, index) => (
              <Product wishItems={wishProducts} data={value} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainProducts;
