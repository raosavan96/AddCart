import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { cartFun } from "../../Features/CartSlice/CartSlice";
import { wishFun } from "../../Features/WishSlice/WishSlice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Rating } from "react-simple-star-rating";

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
        style={{ width: "100%", height: "100%" }}
        className="d-flex align-items-center justify-content-center "
      >
        <div
          className="card container position-relative single_cards"
          style={{ padding: "15px" }}
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

          <div className="d-flex single_page">
            <div className="div_1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "25%",
                height: "auto",
                margin: "0 20px"
              }}
            >
              <img
                src={image}
                style={{
                  objectFit: "contain",
                  aspectRatio: "3/2",
                  margin: "0 auto 0"
                }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body div_2" style={{width:"75%"}}>
              <h4 className="card-title">{title}</h4>
              <p style={{ fontSize: "11px" }} className="card-text">
                {description}
              </p>
              <div></div>
              <ul className="list-group list-group-flush ">
                <li style={{ fontSize: "12px", listStyle: "none" }}>
                  Category:- {category}
                </li>
                <li style={{ fontSize: "12px", listStyle: "none" }}>
                  Price:- {`$${price}`}
                </li>
                <li style={{ fontSize: "12px", listStyle: "none", margin:"15px auto 0" , display:"flex", justifyContent:"center"}}>
                 
                  <Rating initialValue={rating && rating.rate} size={20} />
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
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
