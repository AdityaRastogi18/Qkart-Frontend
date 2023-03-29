import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Box
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart, items, products }) => {
  let token = localStorage.getItem('token');

  return (
    <Card className="card">
      <CardMedia
        className="cardImage"
        component="img"
        alt={product.name}
        image={product.image}
      />
      <CardContent>
        <Box mx={1}>
          <Typography fontWeight="500"> {product.name} </Typography>
          <Typography fontWeight="800"> ${product.cost} </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
          />
        </Box>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddShoppingCartOutlined />}
            onClick = {
              ()=>(handleAddToCart(
                token,
                items,
                products,
                product._id,
                1,
                {isSidebar: false}
            ))}
          >
            ADD TO CART
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
