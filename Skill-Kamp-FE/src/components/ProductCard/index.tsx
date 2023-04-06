import React from "react";
import { Button } from "@material-ui/core";

interface Product {
  image: string;
  name: string;
  price: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const { image, name, price } = product;

  return (
    <div className="category">
      <div className="category-wrapper">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <div className="category-price">
          <span>{price}</span>
        </div>
        <Button
          variant="contained"
          color="default"
          style={{
            padding: "8px 16px",
            backgroundColor: "#FFFFFF",
            border: "1px solid black",
            textTransform: "uppercase",
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
