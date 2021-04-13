import { makeStyles } from "@material-ui/core/styles";

export const flightDetailsStyle = makeStyles({
  line: {
    width: "100%",
    height: ".125rem",
    backgroundColor: "#68697f",
  },
  titleContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
  airplaneIcon: {
    transform: "rotate(90deg)",
    position: "relative",
    left: 5,
    bottom: 10,
  },
  cityCont: {
    position: "relative",
    marginBottom: 15,
  },
  lineAirCont: {
    paddingRight: 50,
    paddingLeft: 50,
    position: "relative",
    top: 5,
  },
  avatar: {
    marginRight: 10,
    width: 30,
    height: 30,
    boxShadow: "0px 0px 4px 1px #888888",
  },
  avatarTitleCont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: 600,
    fontSize: 15,
  },
  titleDate: {
    color: "#6464FF",
    fontWeight: 600,
  },
  details: {
    color: "#787878",
    fontSize: 10,
  },
  place: {
    fontWeight: 600,
    fontSize: 16,
    fontStyle: "italic",
  },
});

export const flightContainerStyle = makeStyles({
  root: {
    marginBottom: 30,
  },
  colContainer: {
    marginTop: 20,
  },
  div: {
    paddingBottom: 20,
    borderBottom: "1px solid #B8B8B8",
  },
  removBtn: {
    color: "#D3D3D3",
    borderColor: "#D3D3D3",
  },
});
