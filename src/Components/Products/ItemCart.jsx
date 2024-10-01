import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography
} from "mdb-react-ui-kit";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import {
  decremItems,
  deleteFun,
  increItems
} from "../../Features/CartSlice/CartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

function ItemCart(props) {
  const dispatch = useDispatch();
  const { title, image, category, price, rating, qunatity, id } =
    props.valueItem;
  const [inputValue, setInputValue] = useState(qunatity);

  function handleDeletePro() {
    dispatch(deleteFun(id));
  }

  function handleItemDecre() {
    let decreIn = inputValue - 1;
    setInputValue(decreIn);
    dispatch(decremItems({ id, qunatity: decreIn }));
  }

  function handleItemIcre() {
    let increIn = inputValue + 1;
    setInputValue(increIn);
    dispatch(increItems({ id, qunatity: increIn }));
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
                  alt={title}
                />
              </Link>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3">
              <p
                className="lead fw-normal mb-2 "
                style={{ fontSize: "16px", fontWeight: "700" }}
              >
                {title}
              </p>
              <p>
                <span className="text-muted">category: {category}</span>
              </p>

              <p className="text-muted">
                <Rating initialValue={rating && rating.rate} size={25} />
              </p>
            </MDBCol>
            <MDBCol
              md="3"
              lg="3"
              xl="2"
              className="d-flex align-items-center justify-content-around"
            >
              <MDBBtn onClick={handleItemDecre} color="link" className="px-2">
                <MDBIcon fas icon="minus" />
              </MDBBtn>

              <MDBInput min={0} value={inputValue} type="number" size="sm" />

              <MDBBtn color="link" className="px-2">
                <MDBIcon onClick={handleItemIcre} fas icon="plus" />
              </MDBBtn>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
              <MDBTypography tag="h5" className="mb-0">
                {`$${(price * qunatity).toFixed(2)}`}
              </MDBTypography>
            </MDBCol>
            <MDBCol md="1" lg="1" xl="1" className="text-end">
              <button
                onClick={handleDeletePro}
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

export default ItemCart;
