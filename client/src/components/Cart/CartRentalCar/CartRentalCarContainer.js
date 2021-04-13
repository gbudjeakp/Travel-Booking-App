import React from "react";

import CartRentalCarDetails from "./CartRentalCarDetails";

import { Grid, Button, Typography } from "@material-ui/core";

import { getCartCarTotal } from "../../../utils/utils";

import { useStateContext, useDispatchContext } from "../../../context";

import { carContainerStyles } from "./styles";

const CartRentalCarContainer = () => {
  const { cart } = useStateContext();
  const classes = carContainerStyles();
  const dispatch = useDispatchContext();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", purchaseType: "rentalCar" });
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.div}>
        {cart?.rentalCar.map((car, _) => {
          const {
            id,
            arrival,
            departure,
            numberOfNights,
            placeOfRental,
            typeOfCar,
            city,
            price,
            taxes,
            rating,
            img,
          } = car;
          return (
            <CartRentalCarDetails
              key={id}
              placeOfRental={placeOfRental}
              arrival={arrival}
              departure={departure}
              numberOfNights={numberOfNights}
              typeOfCar={typeOfCar}
              city={city}
              price={price}
              taxes={taxes}
              rating={rating}
              img={img}
            />
          );
        })}
      </Grid>
      {cart.rentalCar.length > 0 && (
        <>
          <Grid
            container
            justify="space-between"
            className={classes.colContainer}
          >
            <Typography className={classes.title}>Taxes:</Typography>
            <Typography className={classes.price}>
              ${cart.rentalCar[0].taxes}
            </Typography>
          </Grid>
          <Grid container justify="space-between">
            <Typography className={classes.title}>Total:</Typography>
            <Typography className={classes.price}>
              ${getCartCarTotal(cart)}
            </Typography>
          </Grid>
        </>
      )}

      <Grid style={{ marginTop: 20 }} container justify="center">
        <Button
          style={{
            display: cart?.rentalCar.length > 0 ? "block" : "none",
          }}
          className={classes.removBtn}
          onClick={removeFromCart}
        >
          Remove Car
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartRentalCarContainer;
