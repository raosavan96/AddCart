import React, { useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";

export default function ProductCards() {
  const itemCartDate = useSelector((state) => state.cart.value);

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
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

                {/* <MDBCard className="mb-4">
                  <MDBCardBody className="p-4 d-flex flex-row">
                    <MDBInput
                      label="Discound code"
                      wrapperClass="flex-fill"
                      size="lg"
                    />
                    <MDBBtn className="ms-3" color="warning" outline size="lg">
                      Apply
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard> */}

                <MDBCard>
                  <MDBCardBody>
                    <MDBBtn className="ms-3" color="warning" block size="lg">
                      Apply
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
