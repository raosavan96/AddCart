import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import ZoomPic from "./../Products/ZoomPic";

function Navbar() {
  const [countItem, setCountItem] = useState("0");
  const [countWish, setCountWish] = useState("0");
  const itemCartDate = useSelector((state) => state.cart.value);
  const itemWishData = useSelector((state) => state.wish.value);

  useEffect(() => {
    setCountItem(itemCartDate.length == 0 ? "0" : itemCartDate.length);
    setCountWish(itemWishData.length == 0 ? "0" : itemWishData.length);
  }, [itemCartDate, itemWishData]);
  return (
    <>
      <>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container-fluid " style={{ position: "relative" }}>
            <Link className="navbar-brand" to="#">
              Navbar
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Products
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="res_icons">
              <Link to="/wish">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={countWish} color="error">
                    <Favorite sx={{ color: "#000" }} />
                  </Badge>
                </IconButton>
              </Link>

              <Link to="/cart">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={countItem} color="error">
                    <ShoppingCartIcon sx={{ color: "#000" }} />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          </div>
        </nav>
      </>
    </>
  );
}

export default Navbar;
