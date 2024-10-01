import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { cartFun } from "../../Features/CartSlice/CartSlice";
import { wishFun } from "../../Features/WishSlice/WishSlice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function SingleProduct() {
  const productId = useParams();
  const { id } = productId;

  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleCart() {
    dispatch(cartFun(value));
  }

  function hanleWish() {
    dispatch(wishFun(value));
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((singleData) => {
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
        className="d-flex align-items-center justify-content-center "
      >
        <div
          className="card position-relative"
          style={{ width: "18rem", padding: "15px" }}
        >
          <Link to="/">
            <HighlightOffIcon
              style={{
                color: "black",
                position: "absolute",
                top: "5px",
                right: "5px",
                color: "black"
              }}
            />
          </Link>

          <img
            src={image}
            style={{
              width: "180px",
              height: "180px",
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

          <div className="mt-3" style={{ gap: "10px", display: "flex" }}>
            <button
              onClick={handleCart}
              className="w-50  p-2"
              style={{
                border: "none",
                backgroundColor: "#ffc107",
                color: "#000",
                borderRadius: "10px",
                fontSize: "13px"
              }}
            >
              Add Cart
            </button>
            <button
              onClick={hanleWish}
              className="w-50 p-2"
              style={{
                border: "none",
                backgroundColor: "pink",
                color: "black",
                borderRadius: "10px",
                fontSize: "13px"
              }}
            >
              Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
