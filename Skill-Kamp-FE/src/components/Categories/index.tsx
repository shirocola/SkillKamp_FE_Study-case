import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const products = [
  {
    id: 1,
    image: "./Happy%20kids-Materials/Product/Product1.png",
    name: "Product 1",
    price: "19,99₺",
  },
  {
    id: 2,
    image: "./Happy kids-Materials/Product/Product2.png",
    name: "Product 2",
    price: "19,99₺",
  },
  {
    id: 3,
    image: "./Happy kids-Materials/Product/Product3.png",
    name: "Product 3",
    price: "19,99₺",
  },
  {
    id: 4,
    image: "./Happy kids-Materials/Product/Product4.png",
    name: "Product 4",
    price: "19,99₺",
  },
  {
    id: 5,
    image: "./Happy kids-Materials/Product/Product5.png",
    name: "Product 5",
    price: "19,99₺",
  },
  {
    id: 6,
    image: "./Happy kids-Materials/Product/Product6.png",
    name: "Product 6",
    price: "19,99₺",
  },
  {
    id: 7,
    image: "./Happy kids-Materials/Product/Product7.png",
    name: "Product 7",
    price: "19,99₺",
  },
  {
    id: 8,
    image: "./Happy kids-Materials/Product/Product8.png",
    name: "Product 8",
    price: "19,99₺",
  },
  {
    id: 9,
    image: "./Happy kids-Materials/Product/Product9.png",
    name: "Product 9",
    price: "19,99₺",
  },
  {
    id: 10,
    image: "./Happy kids-Materials/Product/Product10.png",
    name: "Product 10",
    price: "19,99₺",
  },
  {
    id: 11,
    image: "./Happy kids-Materials/Product/Product11.png",
    name: "Product 11",
    price: "19,99₺",
  },
  {
    id: 12,
    image: "./Happy kids-Materials/Product/Product12.png",
    name: "Product 12",
    price: "19,99₺",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
    background: "none",
    padding: 0
  },
  product: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    border: "none",
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    marginBottom: theme.spacing(1),
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  arrowLeft: {
    position: "absolute",
    left: 0,
    color: "black",
    cursor: "pointer",
  },
  arrowRight: {
    position: "absolute",
    right: 0,
    color: "black",
    cursor: "pointer",
  },
  shopAllButton: {
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
    },
    marginTop: theme.spacing(2),
  },
  line: {
    borderTop: "1px solid black",
    marginTop: theme.spacing(2),
  }
}));

function ProductList() {
  const classes = useStyles();
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === products.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={classes.root}>
      <h3>New Arrivals</h3>
      <Grid container spacing={2}>
        <div className={classes.arrowLeft} onClick={handlePrev}>
          <ArrowBackIosIcon />
        </div>
        {products.slice(startIndex, startIndex + 4).map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            {/* render the product */}
            <div className={classes.product}>
              <img
                src={product.image}
                alt={product.name}
                className={classes.image}
              />
              <div>{product.name}</div>
              <div className={classes.price}>{product.price}</div>
              <Button variant="contained" color="primary" style={{ backgroundColor: "white", color: "black" }}>
                Add to Cart
              </Button>
            </div>
          </Grid>

        ))}
        <div className={classes.arrowRight} onClick={handleNext}>
          <ArrowForwardIosIcon />
        </div>
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          className={classes.shopAllButton}
          onClick={() => { window.location.href = "/demo-store/shop-collection" }}
        >
          Shop All
        </Button>
      </div>
      <div className={classes.line}></div>
    </div>
  );
}


export default ProductList;
