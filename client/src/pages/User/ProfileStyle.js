/** @format */
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f2f2f2",
    height: "92%",
  },
  profileContainer: {
    textAlign: "center",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  tripContainer: {
    height: "100%",
  },
  drawerRoot: {
    zIndex: 0,
    width: "100%",
  },
  drawerPaper: {
    position: "relative",
  },
  drawerContainer: {
    width: "100%",
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "0 auto",
  },
  profilePosition: {
    marginTop: "4em",
  },
  avatarInfo: {
    marginTop: "0.8em",
    fontSize: "1.2em",
    fontWeight: "bolder",
    "&:last-child": {
      color: "#c5bec4",
      fontSize: "0.8em",
      letterSpacing: ".03em",
      margin: "0 0 2.3em",
    },
  },
  linksContainer: {
    padding: "0 5.3em 0 5em",
    [theme.breakpoints.up("xs")]: {
      "& li": { fontSize: "1em" },
    },
    [theme.breakpoints.up("sm")]: {
      "& li": { fontSize: ".85em" },
      padding: "0 3.3em 0 3em",
    },
    [theme.breakpoints.up("md")]: {
      "& li": { fontSize: "1em" },
    },
  },
  email: {
    color: "#c5bec4",
    fontSize: 12,
    letterSpacing: 1,
  },
  profileLinks: {
    display: "block",
    listStyle: "none",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: ".9em",
    color: "#c5bec4",
    margin: "1em 0 1em",
    padding: "0.5em 0",
    "&.active": {
      color: "black",
      borderLeft: "3px solid #FFA000",
    },
    "&:last-child": {
      margin: "0 0 6em",
    },
  },
  editBtn: {
    color: "#c5bec4",
    fontSize: ".70em",
    marginBottom: "5.5em",
  },
  logoutBtn: {
    color: "#c5bec4",
    fontSize: "0.8em",
    //     [theme.breakpoints.down("md")]: {
    //   paddingTop: 70,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   paddingTop: 50,
    // },
  },
  toolbarIcon: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const accountStyles = makeStyles(() => ({
  title: {
    fontWeight: 600,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 20,
  },
  paper: {
    padding: 40,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#ffb347 !important",
    width: 150,
    height: 40,
  },
  label: {
    fontWeight: 600,
    color: "#000000",
    padding: 5,
  },
  line: { borderBottom: "1px solid lightgrey", marginBottom: 30 },
}));
