/** @format */

import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DepartLogo from "../assets/images/depart.png";
import AmericanAirlinesLogo from "../assets/images/american-airlines-logo.jpeg";
import AirCanadaLogo from "../assets/images/air-canada-logo.jpeg";
import DeltaLogo from "../assets/images/delta-logo.png";
import JetBlueLogo from "../assets/images/jetBlue-logo.jpeg";
import useStyles from "../styles/FlightAccordion";
import { format } from "date-fns";

import AddToCartButton from "./Cart/AddToCartButton";

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

const FlightAccordion = ({ quote, cities }) => {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);

  const findDepartingCarrier = carriers.find(
    (carrier) => carrier.CarrierId === quote.OutboundLeg.CarrierId,
  );
  const departingCarrierLogo = findDepartingCarrier.LogoUrl;
  const departingCarrierName = findDepartingCarrier.Name;
  // format flight dates
  const formattedDate = (date) => {
    const resetDate = new Date(`${date}T00:00`);
    const pattern = (option) => format(resetDate, option);
    return `${pattern("EEE")}, ${pattern("LLL")} ${pattern("d")}`;
  };

  const showDetails = (event, expanded) => setExpand(expanded);

  return (
    <Accordion
      onChange={showDetails}
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
        {expand ? (
          <Grid item container xs={12} alignItems="center">
            <Grid item container xs={8} sm={7} alignItems="center">
              <Grid item xs={false} sm={2} className={classes.hide}>
                <img
                  src={DepartLogo}
                  alt="departure logo"
                  width="85%"
                  className={classes.departLogo}
                />
              </Grid>
              <Grid item xs={12} sm={10} className={classes.departTime}>
                <Typography
                  variant="subtitle2"
                  className={`${classes.departHeader} ${classes.departure}`}
                  display="inline"
                >
                  Departure
                </Typography>
                <Typography
                  display="inline"
                  variant="subtitle2"
                  className={`${classes.departHeader} ${classes.departureDate}`}
                >
                  {formattedDate(quote.OutboundLeg.DepartureDate)}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={4} sm={5} justify="flex-end" spacing={0}>
              <Grid item xs={false} sm={8} md={9} className={classes.buttonBox}>
                <AddToCartButton
                  variant="contained"
                  color="primary"
                  size="large"
                  title="Select Flight"
                  quote={quote}
                  cities={cities}
                  purchaseType="flights"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Typography
                  variant="subtitle2"
                  className={classes.departHeader}
                  align="right"
                >
                  {`$${quote.MinPrice}`}
                </Typography>
                <Typography className={classes.departSubtitle} align="right">
                  {quote.InboundLeg ? "round trip" : "one way"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid item container xs={12} alignItems="center">
            <Grid
              item
              xs={false}
              sm={2}
              className={`${classes.hide} ${classes.airlineLogo}`}
            >
              <img
                src={departingCarrierLogo}
                alt={`${departingCarrierName} logo`}
                width="68%"
              />
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={10}
              className={classes.summaryInfo}
            >
              <Grid
                item
                xs={6}
                sm={5}
                md={3}
                lg={4}
                className={classes.departTime}
              >
                <Typography
                  variant="subtitle2"
                  className={classes.departHeader}
                >
                  {`${quote.OutboundLeg.DepartureTime} - ${quote.OutboundLeg.ArrivalTime}`}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={false}
                className={classes.timeWithStop}
              >
                <Typography
                  variant="subtitle2"
                  className={classes.departHeader}
                >
                  {`${quote.OutboundLeg.Duration} (${
                    quote.Direct === false ? "1 stop" : "Nonstop"
                  })`}
                </Typography>
              </Grid>
              <Grid
                item
                xs={false}
                md={4}
                lg={3}
                className={`${classes.center} ${classes.timeWithoutStop}`}
              >
                <Typography
                  variant="subtitle2"
                  className={classes.departHeader}
                >
                  {quote.OutboundLeg.Duration}
                </Typography>
              </Grid>
              <Grid
                item
                xs={false}
                md={3}
                className={`${classes.hide} ${classes.timeWithoutStop}`}
              >
                <Grid variant="subtitle2" className={classes.departHeader}>
                  {quote.Direct === false ? "1 stop" : "Nonstop"}
                </Grid>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Typography
                  variant="subtitle2"
                  className={classes.departPriceBold}
                  align="right"
                >
                  {`$${quote.MinPrice}`}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                lg={4}
                className={classes.timeWithoutStop}
              >
                <Typography className={classes.departSubtitle}>
                  {departingCarrierName}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={5} md={4} lg={3}>
                <Typography
                  className={classes.departSubtitle}
                >{`${cities.from} - ${cities.to}`}</Typography>
              </Grid>
              <Grid item xs={4} md={3} className={classes.center}>
                {quote.Direct === false && (
                  <Typography className={classes.departSubtitle}>
                    {quote.OutboundLeg.Stops[0].Duration}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Typography className={classes.departSubtitle} align="right">
                  {quote.InboundLeg
                    ? "round trip per traveler"
                    : "one way per traveler"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} className={classes.timeWithStop}>
                <Typography className={classes.departSubtitle}>
                  {departingCarrierName}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Grid item container xs={12}>
          <Grid item xs={false} sm={1} className={classes.summaryLogo}>
            <img
              src={departingCarrierLogo}
              alt={`${departingCarrierName} logo`}
              width="95%"
            />
          </Grid>
          <Grid item xs={12} sm={11}>
            <Timeline className={classes.timeline}>
              <TimelineItem
                classes={{
                  root: classes.itemRoot,
                  missingOppositeContent: classes.timelineItem,
                }}
              >
                <TimelineSeparator classes={{ root: classes.separator }}>
                  <TimelineDot
                    variant="outlined"
                    classes={{ root: classes.timelineDot }}
                  />
                  <TimelineConnector
                    classes={{ root: classes.timelineConnector }}
                  />
                </TimelineSeparator>
                <TimelineContent classes={{ root: classes.timelineContent }}>
                  {`${quote.OutboundLeg.DepartureTime} ${cities.from} Airport`}
                  <Typography
                    color="secondary"
                    className={classes.timelineInsert}
                  >
                    {`Travel Time: ${
                      quote.Direct === false
                        ? quote.OutboundLeg.TravelTimeToStop
                        : quote.OutboundLeg.Duration
                    }`}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              {quote.Direct === false && (
                <TimelineItem
                  classes={{
                    root: classes.itemRoot,
                    missingOppositeContent: classes.timelineItem,
                  }}
                >
                  <TimelineSeparator classes={{ root: classes.separator }}>
                    <TimelineDot
                      variant="outlined"
                      classes={{ root: classes.timelineDot }}
                    />
                    <TimelineConnector
                      classes={{ root: classes.timelineConnector }}
                    />
                  </TimelineSeparator>
                  <TimelineContent classes={{ root: classes.timelineContent }}>
                    {`${quote.OutboundLeg.Stops[0].ArrivalTime} ${quote.OutboundLeg.Stops[0].City}`}
                    <Typography
                      color="secondary"
                      className={classes.timelineInsert}
                    >
                      {`Travel Time: ${quote.OutboundLeg.Stops[0].TravelTimeFromStop}`}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              )}
              <TimelineItem
                classes={{ missingOppositeContent: classes.timelineItem }}
              >
                <TimelineSeparator classes={{ root: classes.separator }}>
                  <TimelineDot
                    variant="outlined"
                    classes={{ root: classes.timelineDot }}
                  />
                </TimelineSeparator>
                <TimelineContent classes={{ root: classes.timelineContent }}>
                  {`${quote.OutboundLeg.ArrivalTime} ${cities.to} Airport`}
                  <Typography
                    color="secondary"
                    className={classes.timelineAfter}
                  >
                    {departingCarrierName}
                  </Typography>
                  <Typography
                    color="secondary"
                    className={classes.timelineAfter}
                    display="inline"
                  >
                    {`Plane and crew by ${departingCarrierName}`}
                  </Typography>
                  <Divider light className={classes.timelineDivider} />
                  {quote.Direct === false && (
                    <Typography
                      color="secondary"
                      className={classes.timelineLast}
                    >
                      {`${quote.OutboundLeg.Stops[0].Duration} layover ${quote.OutboundLeg.Stops[0].City}`}
                    </Typography>
                  )}
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <div className={classes.btnMobile}>
              <AddToCartButton
                variant="contained"
                color="primary"
                size="medium"
                title="Select Flight"
                quote={quote}
                cities={cities}
                purchaseType="flights"
              />
            </div>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default FlightAccordion;
