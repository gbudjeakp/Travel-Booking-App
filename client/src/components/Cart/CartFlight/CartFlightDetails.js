import React from "react";

import { Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import mockFlightImg from "../../../assets/images/airCanada.jpg";
import FlightIcon from "@material-ui/icons/Flight";

import { flightDetailsStyle } from "./styles";

const CartFlightDetails = ({
  name,
  date,
  departureTime,
  duration,
  arrivalTime,
  departurePlace,
  numberOfStops,
  arrivalPlace,
  img,
}) => {
  const classes = flightDetailsStyle();
  return (
    <>
      <Grid container className={classes.colContainer}>
        <Grid
          container
          justify="space-between"
          className={classes.titleContainer}
        >
          <Grid className={classes.avatarTitleCont}>
            <Avatar className={classes.avatar} src={mockFlightImg}></Avatar>
            <Typography className={classes.title} style={{ fontWeight: 600 }}>
              {name.toUpperCase()}
            </Typography>
          </Grid>
          <Typography className={classes.titleDate}>{date}</Typography>
        </Grid>

        <Grid justify="space-between" className={classes.detailsCont} container>
          <Typography style={{ fontWeight: 600 }}>{departureTime}</Typography>
          <Typography className={classes.details}>{duration}</Typography>
          <Typography style={{ fontWeight: 600 }}>{arrivalTime}</Typography>
        </Grid>

        <Grid className={classes.lineAirCont} container justify="center">
          <Grid xs={10} item className={classes.line}></Grid>
          <FlightIcon
            style={{ color: "#787878" }}
            className={classes.airplaneIcon}
          />
        </Grid>

        <Grid
          className={classes.cityCont}
          direction="column"
          alignItems="center"
          container
        >
          <Typography className={classes.place}>{departurePlace}</Typography>
          <Typography className={classes.details}>{numberOfStops}</Typography>
          <Typography className={classes.place}>{arrivalPlace}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartFlightDetails;
