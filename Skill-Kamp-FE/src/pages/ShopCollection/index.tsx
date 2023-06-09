import React from "react";
import { Button, Grid } from "@material-ui/core";
import ProductCard from "../../components/ProductCard"


const products = [
  {
    image: "https://github.com/shirocola/SkillKamp_FE_Study-case/blob/634c219f7f9624c7b803a4e7c1af31de1ca889d0/Skill-Kamp-FE/public/Happy%20kids-Materials/Product/Product1.png",
    name: "Product 1",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product2.png",
    name: "Product 2",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product3.png",
    name: "Product 3",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product4.png",
    name: "Product 4",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product5.png",
    name: "Product 5",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product6.png",
    name: "Product 6",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product7.png",
    name: "Product 7",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product8.png",
    name: "Product 8",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product9.png",
    name: "Product 9",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product10.png",
    name: "Product 10",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product11.png",
    name: "Product 11",
    price: "19,99₺",
  },
  {
    image: "./Happy kids-Materials/Product/Product12.png",
    name: "Product 12",
    price: "19,99₺",
  },
  // Add more products here
];

const ShopCollection = () => {
  return (
    <div className="categories">
      <h2>New Arrivals</h2>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.name}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <hr />
    </div>
  );
};

export default ShopCollection;
