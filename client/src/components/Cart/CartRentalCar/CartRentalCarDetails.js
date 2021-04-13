import React from "react";

import { Typography, Grid } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";

import { carDetailsStyle } from "./styles";

const CartRentalCarDetails = ({
  arrival,
  departure,
  numberOfNights,
  typeOfCar,
  placeOfRental,
  city,
  price,
  rating,
  img,
}) => {
  const classes = carDetailsStyle();
  return (
    <>
      <Grid className={classes.div} container justify="space-between">
        <img alt="rentalCar" className={classes.image} src={img} />
        <Grid item>
          <Typography className={classes.title}>{placeOfRental}</Typography>
          <Typography className={classes.details}>{city}</Typography>
          <Typography style={{ textAlign: "right" }}>
            <Rating
              name="customized-empty"
              defaultValue={rating}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
          </Typography>
          <Typography className={classes.title}>
            ${Math.round(price)}
          </Typography>
          <Typography className={classes.details}>per day</Typography>
        </Grid>
        <Grid container justify="space-between" className={classes.infoDiv}>
          <Typography className={classes.text}>Check In:</Typography>
          <Typography>{arrival}</Typography>
          <Grid container justify="space-between">
            <Typography className={classes.text}>Check Out:</Typography>
            <Typography>{departure}</Typography>
          </Grid>
          <Typography className={classes.text}>Type of Car:</Typography>
          <Typography>{typeOfCar}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartRentalCarDetails;
