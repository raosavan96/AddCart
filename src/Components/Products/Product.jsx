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
import { useDispatch } from "react-redux";
import { cartFun } from "../../Features/CartSlice/CartSlice";
import { wishFun } from "../../Features/WishSlice/WishSlice";
export default function Product(props) {
  const { title, category, image, id } = props.data;

  const { data } = props;

  const dispatch = useDispatch();

  function handleCart() {
    dispatch(cartFun(data));
  }

  function handleWish() {
    dispatch(wishFun(data));
  }

  return (
    <>
      <div className="col-md-4 mt-4">
        <Card
          sx={{
            maxWidth: 300,
            height: 330,
            overflow: "hidden",
            position: "relative"
          }}
        >
          <Checkbox
            onClick={handleWish}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          ></Checkbox>
          <Link to={`/singleproduct/${id}`}>
            <CardMedia
              sx={{
                height: 80,
                objectFit: "cover",
                width: 80,
                aspectRatio: "3/2",
                mixBlendMode: "darken",
                backgroundSize: "contain",
                margin: "0 auto",
                padding: "10px"
              }}
              image={image}
              title="green iguana"
            />
          </Link>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontSize: "15px" }}
              component="div"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "11px" }}
            >
              {category}
            </Typography>
          </CardContent>
          <CardActions sx={{ position: "absolute", bottom: "15px" }}>
            <Button
              onClick={handleCart}
              variant="containd"
              color="success"
              size="small"
            >
              Add cart
            </Button>
            <Link to={`/singleproduct/${id}`}>
              <Button variant="containd " color="warning" size="small">
                More info
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
