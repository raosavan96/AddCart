import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography
} from "mdb-react-ui-kit";
import ItemCart from "./ItemCart";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalItem } from "../../Features/CartSlice/CartSlice";

export default function ProductCards() {
  const itemCartDate = useSelector((state) => state.cart.value);
  const cartTotal = useSelector((state) => state.cart);
  // console.log(cartTotal);

  const dispatch = useDispatch();

  dispatch(cartTotalItem());

  return (
    <section style={{ height: "100%" }}>
      <MDBContainer className="py-5 ">
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol md="10">
            {itemCartDate.length === 0 ? (
              <h3 className="text-center mt-5" style={{ color: "black" }}>
                Your shipping cart is empty
              </h3>
            ) : (
              <>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                    Shopping Cart
                  </MDBTypography>
                  <div>
                    <p className="mb-0">
                      <span className="text-muted">Sort by:</span>
                      <a href="#!" className="text-body">
                        price <i className="fas fa-angle-down mt-1"></i>
                      </a>
                    </p>
                  </div>
                </div>

                {itemCartDate.map((value) => (
                  <ItemCart valueItem={value} />
                ))}

                <MDBCard className="mb-4 py-2">
                  <MDBCardBody>
                    <div className="d-flex justify-content-end">
                      <span>
                        {" "}
                        <p className="m-0 me-3">Total Price:-</p>
                      </span>
                      <span>
                        {" "}
                        <h5 style={{ textAlign: "right", margin: "0" }}>
                          {cartTotal.totalPrice}
                        </h5>
                      </span>
                    </div>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard>
                  <MDBCardBody>
                    <MDBBtn className="ms-3" color="warning" block size="lg">
                      continue to order place
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
