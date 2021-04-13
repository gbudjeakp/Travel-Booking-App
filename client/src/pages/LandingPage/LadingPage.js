import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./LandingPageStyle";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/TB logo.png"

export default function LadingPage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid className={classes.logo}>
      <img src={Logo} style={{width: "200px"}}  alt="application Logo"/>
      </Grid>
      <Typography variant="h4" className={classes.title}>
        Book a Trip with Travel Booking...
      </Typography>
      <Box className={classes.buttonContainer}>
        <NavLink className={classes.navLink}  to="/explore">
        <Button variant="contained" className={classes.button}>
            Discover more
        </Button>
        </NavLink>
      </Box>
    </Grid>
  );
}
