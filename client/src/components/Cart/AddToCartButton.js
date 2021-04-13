import React from "react";

import { nanoid } from "nanoid";
import { useSnackbar } from "notistack";

import { Button } from "@material-ui/core";

import { useDispatchContext, useStateContext } from "../../context";
import useStyles from "../../styles/FlightAccordion";

// MOCK Data
const hotelData = {
  id: nanoid(),
  arrival: "03/20/21",
  departure: "03/20/21",
  numberOfNights: 3,
  numberOfGuests: 2,
  place: "LA cottage",
  city: "LA, USA",
  taxes: 100,
  price: 1000,
  rating: 4,
};

const AddToCartButton = ({
  title,
  quote,
  cities,
  purchaseType,
  variant,
  color,
  size,
  car,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const dispatch = useDispatchContext();
  const { cart } = useStateContext();
  const changeTitle = (titleName) => {
    if (titleName === "flights") return "flight";
    if (titleName === "hotels") return "hotel";
    if (titleName === "rentalCar") return "rental car";
  };

  console.log(quote);
  const addToCart = (purchaseType) => {
    if (purchaseType === "flights") {
      const { OutboundLeg, InboundLeg } = quote;
      const { from, to } = cities;
      const flightData = {
        departure: {
          id: OutboundLeg.CarrierId,
          type: "Outbound",
          price: quote.MinPrice,
          taxes: 1000,
          date: OutboundLeg.DepartureDate,
          departureTime: OutboundLeg.DepartureTime,
          duration: OutboundLeg.Duration,
          arrivalTime: OutboundLeg.ArrivalTime,
          departurePlace: from,
          numberOfStops: `${
            OutboundLeg.Stops && OutboundLeg.Stops.length > 0
              ? OutboundLeg.Stops.length
              : "Non"
          }-stop`,
          arrivalPlace: to,
          stops: OutboundLeg.Stops?.length > 0 ? OutboundLeg.Stops : "",
        },
        arrival: {
          id: InboundLeg.CarrierId,
          type: "Inbound",
          // price: quote.MinPrice,
          taxes: 1000,
          date: InboundLeg.ReturnDate,
          departureTime: InboundLeg.DepartureTime,
          duration: InboundLeg.Duration,
          arrivalTime: InboundLeg.ArrivalTime,
          departurePlace: to,
          numberOfStops: `${
            InboundLeg.Stops && InboundLeg.Stops.length > 0
              ? InboundLeg.Stops.length
              : "Non"
          }-stop`,
          arrivalPlace: from,
          stops: InboundLeg.Stops?.length > 0 ? InboundLeg.Stops : "",
        },
      };

      if (cart[purchaseType].length > 0) {
        enqueueSnackbar(`Limited to 1 ${changeTitle(purchaseType)}`, {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 2000,
        });
      } else {
        dispatch({
          type: "ADD_TO_CART",
          item: flightData,
          purhcaseType: purchaseType,
        });
        enqueueSnackbar("Added to cart", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 2000,
        });
      }
    }

    if (purchaseType === "hotels") {
      if (cart[purchaseType].length > 0) {
        enqueueSnackbar(`Limited to 1 ${changeTitle(purchaseType)}`, {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 2000,
        });
      } else {
        dispatch({
          type: "ADD_TO_CART",
          item: hotelData,
          purhcaseType: purchaseType,
        });
        enqueueSnackbar("Added to cart", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 2000,
        });
      }
    }

    if (purchaseType === "rentalCar") {
      const { name, price, url } = car;
      console.log(price);
      const rentalCarData = {
        id: nanoid(),
        arrival: "03/20/21",
        departure: "03/20/21",
        numberOfNights: 3,
        typeOfCar: name,
        placeOfRental: "LA Car Service",
        city: "LA, USA",
        taxes: 50,
        price: parseInt(price),
        rating: 3,
        img: url,
      };
      if (cart[purchaseType].length > 0) {
        enqueueSnackbar(`Limited to 1 ${changeTitle(purchaseType)}`, {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 2000,
        });
      } else {
        dispatch({
          type: "ADD_TO_CART",
          item: rentalCarData,
          purhcaseType: purchaseType,
        });
        enqueueSnackbar("Added to cart", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          autoHideDuration: 2000,
        });
      }
    }
  };

  return (
    <>
      <Button
        variant={variant}
        color={color}
        size={size}
        classes={{ root: classes.button }}
        onClick={() => addToCart(purchaseType)}
      >
        {title}
      </Button>
    </>
  );
};

export default AddToCartButton;
