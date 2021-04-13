import React from "react";

import CartHotelDetails from "./CartHotelDetails";

import { Grid, Button, Typography } from "@material-ui/core";

import { getCartHotelTotal } from "../../../utils/utils";

import { useStateContext, useDispatchContext } from "../../../context";

import { hotelContainerStyles } from "./styles";

const CartHotelContainer = () => {
  const { cart } = useStateContext();
  const classes = hotelContainerStyles();
  const dispatch = useDispatchContext();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", purchaseType: "hotels" });
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.div}>
        {cart?.hotels.map((hotel, _) => {
          const {
            id,
            arrival,
            departure,
            numberOfNights,
            numberOfGuests,
            place,
            city,
            price,
            rating,
            taxes,
          } = hotel;
          return (
            <CartHotelDetails
              key={id}
              place={place}
              arrival={arrival}
              departure={departure}
              numberOfNights={numberOfNights}
              numberOfGuests={numberOfGuests}
              city={city}
              price={price}
              taxes={taxes}
              rating={rating}
            />
          );
        })}
      </Grid>
      {cart.hotels.length > 0 && (
        <>
          <Grid
            container
            justify="space-between"
            className={classes.colContainer}
          >
            <Typography className={classes.title}>Taxes:</Typography>
            <Typography className={classes.price}>
              ${cart.hotels[0].taxes}
            </Typography>
          </Grid>
          <Grid justify="space-between" container>
            <Typography className={classes.title}>Total:</Typography>
            <Typography className={classes.price}>
              ${getCartHotelTotal(cart)}
            </Typography>
          </Grid>
        </>
      )}

      <Grid style={{ marginTop: 20 }} container justify="center">
        <Button
          className={classes.removBtn}
          style={{
            display: cart?.hotels.length > 0 ? "block" : "none",
          }}
          onClick={removeFromCart}
        >
          Remove Hotel
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartHotelContainer;
