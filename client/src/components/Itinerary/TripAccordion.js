/** @format */

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TripLogo from "../../assets/images/trip-logo.png";
import AmericanAirlinesLogo from "../../assets/images/american-airlines-logo.jpeg";
import AirCanadaLogo from "../../assets/images/air-canada-logo.jpeg";
import DeltaLogo from "../../assets/images/delta-logo.png";
import JetBlueLogo from "../../assets/images/jetBlue-logo.jpeg";
import useStyles from "../../styles/Itinerary/TripAccordion";
import FlightIcon from "@material-ui/icons/Flight";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import FlightDetails from "./FlightDetails";
import HotelDetails from "./HotelDetails";
import CarDetails from "./CarDetails";

const carriers = [
  {
    CarrierId: 29,
    Name: "American Airlines",
    LogoUrl: AmericanAirlinesLogo,
  },
  {
    CarrierId: 173,
    Name: "Air Canada",
    LogoUrl: AirCanadaLogo,
  },
  {
    CarrierId: 870,
    Name: "JetBlue",
    LogoUrl: JetBlueLogo,
  },
  {
    CarrierId: 450,
    Name: "Delta Air Lines",
    LogoUrl: DeltaLogo,
  },
];

const TripAccordion = ({ trip }) => {
  const classes = useStyles();

  const findDepartingCarrier = carriers.find(
    (carrier) =>
      carrier.CarrierId === parseInt(trip.flight[0].carrierDeparture),
  );

  const departingCarrierLogo = findDepartingCarrier.LogoUrl;
  const departingCarrierName = findDepartingCarrier.Name;
  const findReturningCarrier = trip.flight[0].carrierArrival
    ? carriers.find(
        (carrier) => carrier.CarrierId === trip.flight[0].carrierArrival,
      )
    : null;
  const returningCarrierLogo = trip.flight[0].carrierArrival
    ? findReturningCarrier.LogoUrl
    : null;
  const returningCarrierName = trip.flight[0].carrierArrival
    ? findReturningCarrier.Name
    : null;

  const airlines = {
    departing: { name: departingCarrierName, logo: departingCarrierLogo },
    returning: { name: returningCarrierName, logo: returningCarrierLogo },
  };

  const formateDate = (date) => {
    const convertDate = new Date(date);
    const stringDate = convertDate.toDateString();
    return stringDate;
  };

  return (
    <Accordion
      classes={{
        root: classes.accordion,
        expanded: classes.expanded,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        classes={{
          root: classes.summary,
          content: classes.content,
          expanded: classes.expanded,
        }}
      >
        <Grid item container xs={12} alignItems="center">
          <Grid item container xs={8} md={3} lg={4} alignItems="center">
            <Grid item xs={4}>
              <img src={TripLogo} alt="a orange trip logo" width="65%" />
            </Grid>
            <Grid item xs={8} className={classes.departTime}>
              <Typography variant="subtitle2" className={classes.departHeader}>
                {`${formateDate(trip.flight[0].departureDate)} - ${formateDate(
                  trip.flight[0].returnDate,
                )}`}
              </Typography>
              <Typography className={classes.departSubtitle}>
                {departingCarrierName}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={false}
            md={3}
            className={classes.departDuration}
          >
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.departHeader}>
                {/* {trip.flight.OutboundLeg.Duration} */}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={classes.departSubtitle}
              >{`${trip.flight[0].departureLocation} - ${trip.flight[0].destinationLocation}`}</Typography>
            </Grid>
          </Grid>
          <Grid item container xs={false} md={3} className={classes.departStop}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.departHeader}>
                {!trip.flight.Direct ? "1 stop" : "Nonstop"}
              </Typography>
            </Grid>
            {!trip.flight.Direct && (
              <Grid item xs={12}>
                <Typography className={classes.departSubtitle}>
                  {/* {trip.flight.OutboundLeg.Stops[0].Duration} */}
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid
            item
            container
            xs={4}
            md={3}
            lg={2}
            alignItems="center"
            justify="flex-end"
          >
            <Grid item xs={9}>
              <Typography
                variant="subtitle2"
                className={classes.departPriceBold}
                align="right"
              >
                {`$${trip.flight[0].price}`}
              </Typography>
              <Typography className={classes.departSubtitle} align="right">
                {/* {trip.flight.InboundLeg ? "round trip" : "one way"} */}
              </Typography>
              <Typography className={classes.departSubtitle} align="right">
                {/* {`${trip.flight.Travelers} ${
                  trip.flight.Travelers > 1 ? "travelers" : "traveler"
                }`} */}
              </Typography>
            </Grid>
            <Grid item container xs={3} className={classes.iconGrid}>
              <Grid item xs={12} className={classes.iconContainer}>
                <FlightIcon className={classes.icon} />
              </Grid>
              {Object.keys(trip.hotel).length > 0 && (
                <Grid item xs={12} className={classes.iconContainer}>
                  <LocationCityIcon className={classes.icon} />
                </Grid>
              )}
              {Object.keys(trip.car).length > 0 && (
                <Grid item xs={12} className={classes.iconContainer}>
                  <DriveEtaIcon className={classes.icon} />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid item container className={classes.details}>
          <Grid item container xs={12}>
            <FlightDetails trip={trip.flight} carrier={airlines} />
            {Object.keys(trip.hotel).length > 0 && (
              <HotelDetails hotel={trip.hotel} />
            )}
            {Object.keys(trip.car).length > 0 && <CarDetails car={trip.car} />}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default TripAccordion;
