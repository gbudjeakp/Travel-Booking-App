import { makeStyles } from "@material-ui/core/styles";

export const stepperStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: theme.spacing(2),
    marginTop: 10,
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  cartDetailDiv: {
    border: "1px solid lightgray",
    padding: 20,
    borderRadius: 15,
  },
  stepCont: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  route: {
    textDecoration: "none",
    color: "#ffb347",
  },
}));
