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
import { useDispatch } from "react-redux";
import { deleteFun } from "../../Features/CartSlice/CartSlice";

function ItemCart(props) {

  const dispatch = useDispatch();
  const { title, image, category, price, rating, qunatity, id } =
    props.valueItem;

  function handleDeletePro() {
    dispatch(deleteFun(id));
  }

  return (
    <>
      <MDBCard className="rounded-3 mb-4">
        <MDBCardBody className="p-4">
          <MDBRow className="justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
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

              <p className="text-muted">Rating: {rating && rating.rate}</p>
            </MDBCol>
            <MDBCol
              md="3"
              lg="3"
              xl="2"
              className="d-flex align-items-center justify-content-around"
            >
              <MDBBtn color="link" className="px-2">
                <MDBIcon fas icon="minus" />
              </MDBBtn>

              <MDBInput
                min={0}
                defaultValue={qunatity}
                type="number"
                size="sm"
              />

              <MDBBtn color="link" className="px-2">
                <MDBIcon fas icon="plus" />
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
