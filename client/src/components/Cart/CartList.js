import React, { useState } from "react";

import { useStateContext } from "../../context";
import {
  getCartFlightsTotal,
  getCartHotelTotal,
  getCartCarTotal,
  getCartLength,
} from "../../utils/utils";

import Stepper from "./Stepper/Stepper";
import CheckoutButton from "../Stripe/Checkout";

import { Grid, Typography, Button } from "@material-ui/core";

import { useStyles } from "./styles";

const CartList = ({ closeCart }) => {
  const { cart } = useStateContext();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isCartEmpty = getCartLength(cart) === 0 ? true : false;

  function getSteps() {
    return [
      "Confirm flight details",
      "Confirm hotel details",
      "Confirm car rental",
    ];
  }

  const totalPrice = () => {
    let total = 0;
    total += getCartFlightsTotal(cart);
    total += getCartHotelTotal(cart);
    total += getCartCarTotal(cart);
    return total;
  };

  return (
    <>
      <div className={classes.div}>
        <Grid container className={classes.cartDiv}>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            className={classes.header}
          >
            <Typography style={{ color: "#fff", fontWeight: 600 }} variant="h4">
              Travel Summary
            </Typography>
          </Grid>
          <div className={classes.backBtnCont}>
            <Button
              className={classes.backBtn}
              onClick={closeCart}
              variant="outlined"
            >
              Back
            </Button>
          </div>
          <Grid className={classes.cartContainer} xs={12} item>
            <Stepper
              closeCart={closeCart}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              steps={steps}
            />
            <Grid container className={classes.colContainer}>
              <Grid item>
                <Typography style={{ fontWeight: 600 }}> Total</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ fontWeight: 600, color: "#6464ff" }}>
                  ${totalPrice()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.btnCont} container justify="center">
            <CheckoutButton
              isCartEmpty={isCartEmpty}
              activeStep={activeStep}
              steps={steps}
            />
          </Grid>
          <Grid xs={12} item className={classes.footer}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default CartList;
