import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../styles/FavoriteDestinations";

import ExplorePage from "./Explorer/Explore";

function FavoriteDestinantions() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <ExplorePage />
    </Grid>
  );
}

export default FavoriteDestinantions;
