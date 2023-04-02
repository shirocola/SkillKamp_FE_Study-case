import React from "react";
import { Button } from "@material-ui/core";

const Categories = () => {
  return (
    <div className="categories">
      <h2>New Arrivals</h2>
      <div className="categories-container">
        <div className="category">
          <div className="category-wrapper">
            <img src="./Happy kids-Materials/Product/Product1.png" alt="Category" />
            <h3>I'm a product</h3>
            <div className="category-price">
              <span>19,99₺</span>
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
        <div className="category">
          <img src="./Happy kids-Materials/Product/Product2.png" alt="Category" />
          <h3>I'm a product</h3>
          <div className="category-price">
            <span>19,99₺</span>
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
        <div className="category">
          <img src="./Happy kids-Materials/Product/Product3.png" alt="Category" />
          <h3>I'm a product</h3>
          <div className="category-price">
            <span>19,99₺</span>
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
        <div className="category">
          <img src="./Happy kids-Materials/Product/Product4.png" alt="Category" />
          <h3>I'm a product</h3>
          <div className="category-price">
            <span>19,99₺</span>
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
      <Button
        variant="contained"
        color="inherit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#282828",
          color: "#FFFFFF",
          border: "1px solid black",
        }}
      >
        Shop All
      </Button>
      <hr />

    </div>
  );
};

export default Categories;
