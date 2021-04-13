import React, { useEffect } from "react";
import loadingGif from "../../assets/images/238.gif";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { useDispatchContext, useStateContext } from "../../context";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const AuthWrapper = ({ children }) => {
  const classes = useStyles();
  const { loading } = useStateContext();

  return (
    <Grid className={classes.container}>
      <img src={loadingGif} alt="spinner" />
    </Grid>
  );
  return <>{children}</>;
};
export default AuthWrapper;
