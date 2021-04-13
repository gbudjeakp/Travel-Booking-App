/** @format */

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  contain: {
    padding: 0,
    [theme.breakpoints.down("xs")]:{
      width: "75%"
    }
  },
  modalBody: {
    width: "70%",
    margin: "0 auto",
  },
  modalSubmit: {
    padding: "0.65rem 3em",
    margin: "2.85em 0 3.25em",
    fontSize: "0.875em",
    backgroundColor: "orange",
    "&:hover": {
      backgroundColor: "orange",
    },
  },
  modalFooter: {
    padding: "1.85em 0 1.95em",
    color: "#a6a6a6",
    fontWeight: "bold",
    borderTop: "1px solid #e6e6e6",
  },
  modalTitle: {
    fontWeight: "bold",
  },
  modalSubtitle: {
    margin: "1em auto 2.5em",
    width: "90%",
    color: "#a6a6a6",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    color: "#9966ff",
    padding: 0,
    cursor: "pointer",
  },
  locationIcon: {
    color: "#9999ff",
    fontSize: "22px",
  },
  closeModal: {
    color: "#bfbfbf",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[3],
    overflow: "hidden"
  },
  closeIcon: {
    color: "#cccccc",
    fontSize: "14px",
  },
  input: {
    marginLeft: "-4px",
  },
  inputBase: {
    fontWeight: "bold",
    border: "1px solid #e6e6e6",
    borderRadius: theme.shape.borderRadius,
    height: "6vh",
    padding: "24px 14px",
  },
  inputRoot: {
    paddingRight: "0 !important",
  },
}));
