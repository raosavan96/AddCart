import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleProduct() {
  const productId = useParams();
  const { id } = productId;

  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((singleData) => {
        console.log(singleData);
        setValue(singleData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { title, image, description, price, category, rating } = value;

  return (
    <>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="card" style={{ width: "18rem", padding: "15px" }}>
          <img
            src={image}
            style={{
              width: "140px",
              height: "140px",
              objectFit: "contain",
              aspectRatio: "3/2",
              margin: "0 auto 0"
            }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p style={{ fontSize: "11px" }} className="card-text">
              {description}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li style={{ fontSize: "12px" }} className="list-group-item">
              Category:- {category}
            </li>
            <li style={{ fontSize: "12px" }} className="list-group-item">
              Price:- {`$${price}`}
            </li>
            <li style={{ fontSize: "12px" }} className="list-group-item">
              Rating:- {rating && rating.rate}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
