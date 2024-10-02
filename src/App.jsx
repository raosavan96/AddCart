import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Navbar from "./Components/AppBar/Navbar";
import MainProducts from "./Components/Products/MainProducts";
import Cart from "./Components/Products/Cart";
import Wishlist from "./Components/Products/Wishlish/Wishlist";
import SingleProduct from "./Components/Products/SingleProduct";
import "./App.css";
import ZoomPic from "./Components/Products/ZoomPic";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<MainProducts productData={product} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route
            path="/singleproduct/:id"
            element={<SingleProduct productData={product} />}
          />
          {/* <Route path="/zoompic" element={<ZoomPic />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
