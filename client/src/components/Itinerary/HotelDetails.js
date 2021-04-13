/** @format */

import React from "react";
import { Link, Typography, Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import LaunchIcon from "@material-ui/icons/Launch";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import useStyles from "../../styles/Itinerary/HotelDetails";

const HotelDetails = ({ hotel }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography component="h6" variant="h6" className={classes.hotelTitle}>
        Hotel
      </Typography>
      <Grid container className={classes.hotelContainer}>
        <Grid item container sm={12} spacing={3}>
          <Grid item md={6} className={classes.hotelImg}>
            <img
              width="100%"
              height="100%"
              src={hotel.image}
              alt="beach side view of Art Ovation Hotel"
            />
          </Grid>
          <Grid item md={6}>
            <div className={classes.details}>
              <Typography
                component="h5"
                variant="h5"
                className={classes.hotelName}
              >
                {hotel.name}
              </Typography>
              <Grid item container alignItems="center" spacing={1}>
                <Grid item>
                  <Rating name="read-only" value={4} readOnly />
                </Grid>
                <Grid item>
                  {/* <Typography>{hotel.reviews} reviews</Typography> */}
                </Grid>
              </Grid>
              <Link
                href={hotel.url}
                classes={{ root: classes.links }}
                target="_blank"
                rel="noopener"
              >
                <Grid item container spacing={1}>
                  <Grid item className={classes.icons}>
                    <LaunchIcon />
                  </Grid>
                  <Grid item>
                    <Typography>View Hotel</Typography>
                  </Grid>
                </Grid>
              </Link>
              <Link
                href={`tel:${hotel.phone}`}
                className={classes.links}
                rel="noopener"
              >
                <Grid item container spacing={1}>
                  <Grid item className={classes.icons}>
                    <LocalPhoneIcon />
                  </Grid>
                  <Grid item>
                    {/* <Typography>{hotel.phone.slice(2)}</Typography> */}
                  </Grid>
                </Grid>
              </Link>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  hotel.location,
                )}`}
                target="_blank"
                className={classes.links}
                rel="noopener"
              >
                <Grid item container spacing={1}>
                  <Grid item xs={1} className={classes.icons}>
                    <LocationOnIcon />
                  </Grid>
                  <Grid item xs={11}>
                    {/* <Typography>{hotel.location}</Typography> */}
                  </Grid>
                </Grid>
              </Link>
              {/* <Typography
								className={classes.bold}
							>{`Room, ${hotel.rooms} Queen Beds, Non Smoking`}</Typography> */}
              {/* <Typography>
								Check-in:{" "}
								<span className={classes.bold}>{hotel.checkInDate}</span> at{" "}
								{hotel.checkInTime}
							</Typography> */}
              {/* <Typography>
								Check-out:{" "}
								<span className={classes.bold}>{hotel.checkOutDate}</span> at{" "}
								{hotel.checkOutTime}
							</Typography> */}
            </div>
          </Grid>
        </Grid>
        <Grid item sm={12} className={classes.policyContainer}>
          <Typography className={classes.hotelPolicies}>
            Check-in policies:
          </Typography>
          <Typography>Contactless check-in and check-out</Typography>
          <Typography>Check-in time starts at 4:00 PM</Typography>
          <Typography>Check-in time ends at midnight</Typography>
          <Typography>Minimum check-in age is: 21</Typography>
          <Typography>
            If a late check-in is planned, contact this property directly for
            their late check-in policy.
          </Typography>
          <Typography>
            Front desk staff will greet guests on arrival.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HotelDetails;
