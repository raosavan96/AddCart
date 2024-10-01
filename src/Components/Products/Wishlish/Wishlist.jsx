import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import WishlistPro from "./WishlistPro";

export default function Wishlist() {
  const wishProducts = useSelector((state) => state.wish.value);

  return (
    <section style={{  height:"100%" }}>
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center align-items-center ">
          <MDBCol md="10">
            {wishProducts.length === 0 ? (
              <h3 className="text-center mt-5" style={{ color: "black" }}>
                Your favorite cart is empty
              </h3>
            ) : (
              <>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                    Favorite Product
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

                {wishProducts.map((value) => (
                  <WishlistPro value={value} />
                ))}
              </>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
