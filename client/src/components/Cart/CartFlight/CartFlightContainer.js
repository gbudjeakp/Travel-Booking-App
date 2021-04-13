import React from "react";

import { Grid, Button, Typography } from "@material-ui/core";

import { useStateContext, useDispatchContext } from "../../../context";

import { getCartFlightsTotal } from "../../../utils/utils";

import CartFlightDetails from "./CartFlightDetails";

import { flightContainerStyle } from "./styles";

const CartFlightContainer = () => {
  const { cart } = useStateContext();
  const classes = flightContainerStyle();
  const dispatch = useDispatchContext();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", purchaseType: "flights" });
  };
  return (
    <Grid className={classes.root}>
      <Grid className={classes.div}>
        {cart?.flights.map((flight, _) => {
          const {
            type,
            date,
            departureTime,
            duration,
            arrivalTime,
            departurePlace,
            numberOfStops,
            arrivalPlace,
            id,
          } = flight.departure;
          return (
            <CartFlightDetails
              key={id}
              name={type}
              date={date}
              departureTime={departureTime}
              duration={duration}
              arrivalTime={arrivalTime}
              departurePlace={departurePlace}
              numberOfStops={numberOfStops}
              arrivalPlace={arrivalPlace}
            />
          );
        })}
        {cart?.flights.map((flight, _) => {
          const {
            type,
            date,
            departureTime,
            duration,
            arrivalTime,
            departurePlace,
            numberOfStops,
            arrivalPlace,
            id,
          } = flight.arrival;
          return (
            <CartFlightDetails
              key={id}
              name={type}
              date={date}
              departureTime={departureTime}
              duration={duration}
              arrivalTime={arrivalTime}
              departurePlace={departurePlace}
              numberOfStops={numberOfStops}
              arrivalPlace={arrivalPlace}
            />
          );
        })}
      </Grid>
      {cart.flights.length > 0 && (
        <>
          <Grid
            container
            justify="space-between"
            className={classes.colContainer}
          >
            <Typography style={{ fontWeight: 600 }}>Taxes:</Typography>
            <Typography style={{ fontWeight: 600, color: "#6464FF" }}>
              ${cart.flights[0].arrival.taxes + cart.flights[0].departure.taxes}
            </Typography>
          </Grid>

          <Grid justify="space-between" container>
            <Typography style={{ fontWeight: 600 }}>Total:</Typography>
            <Typography style={{ color: "#6464FF", fontWeight: 600 }}>
              ${getCartFlightsTotal(cart)}
            </Typography>
          </Grid>
        </>
      )}
      <Grid style={{ marginTop: 20 }} container justify="center">
        <Button
          style={{ display: cart?.flights.length > 0 ? "block" : "none" }}
          className={classes.removBtn}
          onClick={removeFromCart}
        >
          Remove Flight
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartFlightContainer;
