/** @format */

import React from "react";
import { Typography, Grid } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import useStyles from "../../styles/Itinerary/FlightDetails";
// import { format } from "date-fns";

const FlightDetails = ({ trip, carrier }) => {
  const classes = useStyles();


  // const formattedDate = (date) => {
  //   const resetDate = new Date(`${date}T00:00`);
  //   const pattern = (option) => format(resetDate, option);
  //   return `${pattern("EEE")}, ${pattern("LLL")} ${pattern("d")}, ${pattern(
  //     "yyyy",
  //   )}`;
  // };

  console.log(trip);
  const formateDate = (date) => {
    const convertDate = new Date(date);
    const stringDate = convertDate.toDateString();
    return stringDate;
  };

  return (
    <div>
      <Typography variant="h6" className={classes.flightTitle}>
        Flight
      </Typography>
      <Grid item container className={classes.flightHeader}>
        <Grid item xs={6} md={4} classes={{ root: classes.flightTypeGrid }}>
          <Typography classes={{ body1: classes.flightType }}>
            Departure {formateDate(trip[0].departureDate)}
          </Typography>
        </Grid>
        <Grid item xs={false} md={2} className={classes.stopHeader}>
          <Typography>{trip.Direct ? "Nonstop" : "1 stop"}</Typography>
        </Grid>
        <Grid item xs={6} md={4} className={classes.travelHeader}>
          <Typography>
            Arrival date: {formateDate(trip[0].returnDate)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.flightInfo}>
        <Grid item xs={1}>
          <img
            src={carrier.departing.logo}
            alt={`${carrier.departing.name} logo`}
            width="70%"
          />
        </Grid>
        <Grid item container xs={11} className={classes.flightInfoContainer}>
          <Grid item xs={3} md={2}>
            <Typography className={classes.flightInfoFont}>
              {trip.From}
            </Typography>
            <Typography className={classes.tripTime}>
              {trip[0].departureObj.departurePlace +
                " " +
                trip[0].departureObj.departureTime}
            </Typography>
            <Typography className={classes.flightInfoFont}>
              {carrier.departing.name}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <ArrowRightAltIcon
              fontSize="large"
              classes={{ root: classes.arrow }}
            />
          </Grid>
          <Grid item xs={3}>
            {!trip.Direct ? (
              <>
                <Typography className={classes.flightInfoFont}>
                  {/* {trip.OutboundLeg.Stops[0].City.slice(0, -5)} */}
                </Typography>
                {/* <Typography
                  className={classes.flightInfoFont}
                >{`${trip.OutboundLeg.Stops[0].City.slice(-5, 0)} ${
                  trip.OutboundLeg.Stops[0].ArrivalTime
                }`}</Typography> */}
              </>
            ) : (
              <>
                <Typography className={classes.flightInfoFont}>
                  {trip.To}
                </Typography>
                <Typography className={classes.tripTime}>{`${trip.To.slice(
                  0,
                  3,
                )} ${trip.OutboundLeg.ArrivalTime} `}</Typography>
              </>
            )}
          </Grid>
          <Grid item xs={3} md={4} lg={5}>
            {/* <Typography className={classes.flightInfoFont}>
              {!trip.Direct
                ? trip.OutboundLeg.TravelTimeToStop
                : trip.OutboundLeg.Duration}
            </Typography> */}
          </Grid>
          {!trip.Direct && (
            <Grid item xs={12}>
              <Typography
                className={`${classes.layovers} ${classes.flightInfoFont}`}
              >
                {/* Layover: {trip.OutboundLeg.Stops[0].Duration} */}
              </Typography>
            </Grid>
          )}
        </Grid>
        {!trip.Direct && (
          <Grid item container className={classes.flightInfo}>
            <Grid item xs={1}>
              <img
                src={carrier.departing.logo}
                alt={`${carrier.departing.name} logo`}
                width="70%"
              />
            </Grid>
            <Grid
              item
              container
              xs={11}
              className={classes.flightInfoContainer}
            >
              <Grid item xs={3} md={2}>
                <Typography className={classes.flightInfoFont}>
                  {/* {trip.OutboundLeg.Stops[0].City.slice(0, -5)} */}
                </Typography>
                {/* <Typography
                  className={classes.flightInfoFont}
                >{`${trip.OutboundLeg.Stops[0].City.slice(-5, 0)} ${
                  trip.OutboundLeg.Stops[0].DepartureTime
                }`}</Typography> */}
                <Typography className={classes.flightInfoFont}>
                  {carrier.departing.name}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <ArrowRightAltIcon
                  fontSize="large"
                  classes={{ root: classes.arrow }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography className={classes.flightInfoFont}>
                  {trip.To}
                </Typography>
                {/* <Typography className={classes.tripTime}>{`${trip.To.slice(
                  0,
                  3,
                )} ${trip.OutboundLeg.ArrivalTime}`}</Typography> */}
              </Grid>
              <Grid item xs={3} md={4} lg={5}>
                <Typography className={classes.flightInfoFont}>
                  {/* {trip.OutboundLeg.Stops[0].TravelTimeFromStop} */}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>

      {/* if a round trip */}
      {trip.InboundLeg && (
        <>
          <Grid item container className={classes.flightHeader}>
            <Grid item xs={6} md={4} classes={{ root: classes.flightTypeGrid }}>
              <Typography classes={{ body1: classes.flightType }}>
                {/* Return {formattedDate(trip.InboundLeg.ReturnDate)} */}
              </Typography>
            </Grid>
            <Grid item xs={false} md={2} className={classes.stopHeader}>
              {/* <Typography>{trip.Direct ? "Nonstop" : "1 stop"}</Typography> */}
            </Grid>
            <Grid item xs={6} md={4} className={classes.travelHeader}>
              {/* <Typography>Travel time: {trip.InboundLeg.Duration}</Typography> */}
            </Grid>
          </Grid>
          <Grid item container className={classes.flightInfo}>
            <Grid item xs={1}>
              <img
                src={carrier.returning.logo}
                alt={`${carrier.returning.name} logo`}
                width="70%"
              />
            </Grid>
            <Grid
              item
              container
              xs={11}
              className={classes.flightInfoContainer}
            >
              <Grid item xs={3} md={2}>
                <Typography className={classes.flightInfoFont}>
                  {/* {trip.To} */}
                </Typography>
                {/* <Typography className={classes.tripTime}>{`${trip.To.slice(
                  0,
                  3,
                )} ${trip.InboundLeg.DepartureTime}`}</Typography> */}
                <Typography className={classes.flightInfoFont}>
                  {/* {carrier.returning.name} */}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <ArrowRightAltIcon
                  fontSize="large"
                  classes={{ root: classes.arrow }}
                />
              </Grid>
              <Grid item xs={3}>
                {!trip.Direct ? (
                  <>
                    <Typography className={classes.flightInfoFont}>
                      {/* {trip.InboundLeg.Stops[0].City.slice(0, -5)} */}
                    </Typography>
                    {/* <Typography
                      className={classes.flightInfoFont}
                    >{`${trip.InboundLeg.Stops[0].City.slice(-5, 0)} ${
                      trip.InboundLeg.Stops[0].ArrivalTime
                    }`}</Typography> */}
                  </>
                ) : (
                  <>
                    <Typography className={classes.flightInfoFont}>
                      {/* {trip.From} */}
                    </Typography>
                    {/* <Typography
                      className={classes.tripTime}
                    >{`${trip.From.slice(0, 3)} ${
                      trip.InboundLeg.ArrivalTime
                    } `}</Typography> */}
                  </>
                )}
              </Grid>
              <Grid item xs={3} md={4} lg={5}>
                {/* <Typography className={classes.flightInfoFont}>
                  {!trip.Direct
                    ? trip.InboundLeg.TravelTimeToStop
                    : trip.InboundLeg.Duration}
                </Typography> */}
              </Grid>

              {!trip.Direct && (
                <Grid item xs={12}>
                  <Typography
                    className={`${classes.layovers} ${classes.flightInfoFont}`}
                  >
                    {/* Layover: {trip.InboundLeg.Stops[0].Duration}s */}
                  </Typography>
                </Grid>
              )}
            </Grid>
            {!trip.Direct && (
              <Grid item container className={classes.flightInfo}>
                <Grid item xs={1}>
                  <img
                    src={carrier.returning.logo}
                    alt={`${carrier.returning.name} logo`}
                    width="70%"
                  />
                </Grid>
                <Grid
                  item
                  container
                  xs={11}
                  className={classes.flightInfoContainer}
                >
                  <Grid item xs={3} md={2}>
                    <Typography className={classes.flightInfoFont}>
                      {/* {trip.InboundLeg.Stops[0].City.slice(0, -5)} */}
                    </Typography>
                    {/* <Typography
                      className={classes.flightInfoFont}
                    >{`${trip.InboundLeg.Stops[0].City.slice(-5, 0)} ${
                      trip.InboundLeg.Stops[0].DepartureTime
                    }`}</Typography> */}
                    <Typography className={classes.flightInfoFont}>
                      {carrier.returning.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <ArrowRightAltIcon
                      fontSize="large"
                      classes={{ root: classes.arrow }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.flightInfoFont}>
                      {/* {trip.From} */}
                    </Typography>
                    {/* <Typography
                      className={classes.tripTime}
                    >{`${trip.From.slice(0, 3)} ${
                      trip.InboundLeg.ArrivalTime
                    }`}</Typography> */}
                  </Grid>
                  <Grid item xs={3} md={4} lg={5}>
                    <Typography className={classes.flightInfoFont}>
                      {/* {trip.InboundLeg.Stops[0].TravelTimeFromStop} */}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </>
      )}
    </div>
  );
};
export default FlightDetails;
