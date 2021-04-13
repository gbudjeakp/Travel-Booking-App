/** @format */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    paddingTop: 0,
    paddingLeft: 20,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "6.4em",
    },
  },
  paperContainer: {
    height: 300,
    borderRadius: 10,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  title: {
    margin: 5,
    textAlign: "center",
  },
  customCheckBoxRoot: {
    width: 5,
    height: 5,
  },
  bottomInformationContainer: {
    display: "flex",
    height: "15%",
    borderTop: "1px solid #a9a9a9",
    padding: 10,
    justifyContent: "space-between",
  },
  bottomInformationSubContainer1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
  },
  bottomInformationSubContainer2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "relative",
    bottom: 25,
    height: 1,
    right: 10,
  },
  subtitle2: {
    color: "#c5bec4",
    fontSize: 12,
  },
  favoriteDefaultIcon: {
    color: "white",
  },
  favoriteCheckedIcon: {
    color: "orange",
  },
  gridContainer: {
    marginTop: 32,
    height: "75%",
  },
  legend1: {
    fontSize: 17,
    color: "white",
  },
  legend2: {
    fontSize: 11,
    color: "rgb(175 175 175)",
  },
  shuffle: {
    marginTop: 20,
    "&:hover": {
      color: "orange",
    },
  },
  exploreLink: {
    textDecoration: "none",
    color: "#000000",
  },
}));
