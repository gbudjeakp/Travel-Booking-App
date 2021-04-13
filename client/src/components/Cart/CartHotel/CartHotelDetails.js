import React from "react";

import { Typography, Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import backgroundImage from "../../../assets/images/hotel.jpeg";

import { hotelDetailsStyle } from "./styles";

const CartHotelDetails = ({
  arrival,
  departure,
  numberOfNights,
  numberOfGuests,
  place,
  city,
  price,
  taxes,
  rating,
}) => {
  const classes = hotelDetailsStyle();

  return (
    <>
      <Grid className={classes.div} container justify="space-between">
        <img
          alt="hotelImage"
          className={classes.hotelImage}
          src={backgroundImage}
        />
        <Grid item>
          <Typography className={classes.title}>{place}</Typography>
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
            ${Math.round(price / numberOfNights)}
          </Typography>
          <Typography className={classes.details}>per night</Typography>
        </Grid>
        <Grid justify="space-between" container className={classes.infoDiv}>
          <Typography className={classes.text}>Check In:</Typography>
          <Typography>{arrival}</Typography>
          <Grid container justify="space-between">
            <Typography className={classes.text}>Check Out:</Typography>
            <Typography>{departure}</Typography>
          </Grid>
          <Typography className={classes.text}> Guests:</Typography>
          <Typography>{numberOfGuests}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartHotelDetails;
