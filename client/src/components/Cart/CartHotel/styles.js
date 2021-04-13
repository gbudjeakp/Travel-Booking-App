import { makeStyles } from "@material-ui/core/styles";
export const hotelContainerStyles = makeStyles({
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
  price: {
    fontWeight: 600,
    color: "#6464FF",
  },
  title: {
    fontWeight: 600,
  },
  removBtn: {
    color: "#D3D3D3",
    borderColor: "#D3D3D3",
  },
});
export const hotelDetailsStyle = makeStyles(() => ({
  infoDiv: { marginTop: 10 },
  hotelImage: {
    width: 130,
    height: 100,
    objectFit: "cover",
    borderRadius: 10,
    boxShadow: "0px 0px 4px 1px #888888",
    "@media (max-width:450px)": {
      width: 110,
      height: 80,
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 15,
    textAlign: "right",
  },
  details: {
    textAlign: "right",
    fontSize: 10,
    color: "grey",
  },
  text: {
    fontWeight: 600,
  },
}));
