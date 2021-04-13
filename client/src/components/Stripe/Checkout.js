import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { useHistory } from "react-router";

import { Button } from "@material-ui/core";
import { useDispatchContext, useStateContext } from "../../context/context";
import { useStyles } from "../Cart/styles";
import { useSnackbar } from "notistack";

import {
  getCartFlightsTotal,
  getCartHotelTotal,
  getCartCarTotal,
} from "../../utils/utils";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Checkout = ({ isCartEmpty, activeStep, steps }) => {
  const { user, cart } = useStateContext();
  const dispatch = useDispatchContext();
  const { enqueueSnackbar } = useSnackbar();
  const { flights, hotels, rentalCar } = cart;
  const history = useHistory();
  const classes = useStyles();

  const paymentDetails = {
    flights: {
      totalPrice: getCartFlightsTotal(cart),
      departure:
        flights.length === 0 ? "" : flights[0].departure.departurePlace,
      arrival: flights.length === 0 ? "" : flights[0].departure.arrivalPlace,
    },
    hotels: {
      totalPrice: getCartHotelTotal(cart),
      details: hotels.length === 0 ? "" : hotels[0].place,
    },
    rentalCars: {
      totalPrice: getCartCarTotal(cart),
      details: rentalCar.length === 0 ? "" : rentalCar[0].placeOfRental,
    },
    currency: "usd",
    stripeId: user && user.customer?.stripeId,
    id: user && user._id,
  };

  const goToPayment = async (e) => {
    e.preventDefault();
    if (!user?._id) {
      dispatch({ type: "LOGIN_REQUEST" });
      openSnack();
      return;
    }
    localStorage.setItem("Itinerary", JSON.stringify(cart));
    localStorage.setItem("User", JSON.stringify(user));
    localStorage.setItem("Receipt", JSON.stringify(paymentDetails));
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout/checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentDetails),
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      history.push("/error");
    }
  };
  const openSnack = () => {
    enqueueSnackbar("Please sign in or signup to proceed with payment", {
      variant: "info",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center",
      },
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <Button
        onClick={goToPayment}
        disabled={
          isCartEmpty ? true : activeStep === steps.length ? false : true
        }
        className={classes.btn}
      >
        Payment
      </Button>
    </>
  );
};

export default Checkout;
