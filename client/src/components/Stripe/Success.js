import React, { useEffect } from "react";

import "@lottiefiles/lottie-player";

import { Grid, Typography } from "@material-ui/core";
import { useHistory, Redirect } from "react-router";

import { getReciept } from "./Receipt";

const Success = () => {
  const history = useHistory();
  const itiData = JSON.parse(localStorage.getItem("Itinerary"));

  const createItinerary = async () => {
    const userData = JSON.parse(localStorage.getItem("User"));
    const receiptData = JSON.parse(localStorage.getItem("Receipt"));
    const receiptObj = getReciept(receiptData, userData.email);
    const itineraryObj = {
      itiData,
      userData,
    };
    const res = await fetch("/api/checkout/create-itinerary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itineraryObj),
    });

    await fetch("/api/email/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receiptObj),
    });

    const resData = await res.json();

    if (resData.status === "Success") {
      setTimeout(() => {
        history.push("/explore");
        localStorage.removeItem("Itinerary");
        localStorage.removeItem("User");
        localStorage.removeItem("Receipt");
      }, 3500);
    }
  };

  useEffect(() => {
    createItinerary();
    // eslint-disable-next-line
  }, []);

  if (!itiData) {
    return <Redirect to="/explore" />;
  }

  return (
    <Grid
      container
      style={{ height: "100%", backgroundColor: "#ededed" }}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Typography variant="h2" style={{ fontWeight: 600 }}>
        Successsful Payment
      </Typography>
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_mhafn2ws.json"
        background="transparent"
        speed="1"
        style={{ width: 400, height: 400 }}
        mode="normal"
        loop
        autoplay
      ></lottie-player>
      <Typography>Redirecting to Home....</Typography>
    </Grid>
  );
};

export default Success;
