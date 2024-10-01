import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTypography
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { wishDelete } from "../../../Features/WishSlice/WishSlice";
import { Link } from "react-router-dom";

function WishlistPro(props) {
  const { title, image, category, price, rating, id } = props.value;

  const dispatch = useDispatch();


  function handleWish() {
    dispatch(wishDelete(id));
  }
  return (
    <>
      <MDBCard className="rounded-3 mb-4">
        <MDBCardBody className="p-4">
          <MDBRow className="justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
              <Link to={`/singleproduct/${id}`}>
                <MDBCardImage
                  className="rounded-3"
                  style={{
                    width: "95px",
                    height: "95px",
                    aspectRatio: "3/2",
                    objectFit: "contain"
                  }}
                  fluid
                  src={image}
                  alt="Cotton T-shirt"
                />
              </Link>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2">
              <p
                className="lead fw-normal mb-2 "
                style={{ fontSize: "14px", fontWeight: "700" }}
              >
                {title}
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2">
              <p style={{ fontSize: "13px" }} className="text-muted">
                Rating: {rating && rating.rate}
              </p>
            </MDBCol>
            <MDBCol md="3" lg="3">
              <p>
                <span style={{ fontSize: "13px" }} className="text-muted">
                  category: {category}
                </span>
              </p>
            </MDBCol>

            <MDBCol md="1" lg="1" xl="1" className="offset-lg-1">
              <MDBTypography
                style={{ fontSize: "13px" }}
                tag="h5"
                className="mb-0"
              >
                {`$${price.toFixed(2)}`}
              </MDBTypography>
            </MDBCol>
            <MDBCol md="1" lg="1" xl="1" className="text-end">
              <button
                onClick={handleWish}
                className="text-danger"
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <MDBIcon fas icon="trash text-danger" size="lg" />
              </button>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default WishlistPro;
