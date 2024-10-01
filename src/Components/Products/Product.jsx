import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartFun } from "../../Features/CartSlice/CartSlice";
import { wishFun } from "../../Features/WishSlice/WishSlice";
import { Rating } from "react-simple-star-rating";
export default function Product(props) {
  const { title, category, image, id, rating } = props.data;

  const { data } = props;
  const { wishItems } = props;

  const isWished = wishItems.some(
    (item) => item.id === id && item.checkItem === true
  );

  const dispatch = useDispatch();

  function handleCart() {
    dispatch(cartFun(data));
  }

  function handleWish() {
    dispatch(wishFun(data));
  }

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
        <Card
          sx={{
            maxWidth: 300,
            height: 330,
            overflow: "hidden",
            position: "relative",
            margin: "0 auto"
          }}
        >
          <Rating
            style={{ position: "absolute", top: "5px", right: "8px" }}
            initialValue={rating && rating.rate}
            size={18}
          />
          <Checkbox
            checked={isWished}
            onClick={handleWish}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          ></Checkbox>
          <Link to={`/singleproduct/${id}`}>
            <CardMedia
              sx={{
                height: 135,
                objectFit: "cover",
                width: 135,
                aspectRatio: "3/2",
                mixBlendMode: "darken",
                backgroundSize: "contain",
                margin: "0 auto",
                padding: "10px"
              }}
              image={image}
              title={title}
            />
          </Link>
          <CardContent className="pt-0">
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontSize: "13px" }}
              component="div"
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "12px" }}
            >
              {category}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              position: "absolute",
              bottom: "5px",
              width: "100%",
              justifyContent: "space-around"
            }}
          >
            <Button
              className="add_more"
              onClick={handleCart}
              variant="containd"
              style={{ backgroundColor: "#ffc107" }}
              size="small"
            >
              Add cart
            </Button>
            <Link to={`/singleproduct/${id}`}>
              <Button
                className="add_more"
                variant="containd "
                color="warning"
                size="small"
                style={{ backgroundColor: "#009688", color: "#fff" }}
              >
                More info
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
