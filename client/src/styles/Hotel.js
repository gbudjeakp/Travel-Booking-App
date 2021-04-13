import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		height: "92%",
		backgroundColor: "#ededed",
		[theme.breakpoints.down("xs")]: {
			paddingLeft: "4em",
		},
	},
	container: {
		height: "74%",
	},
	titleContainer: {
		height: "100%",
		backgroundColor: "#fff",
		justifyContent: "center",
		textAlign: "center",
		paddingTop: "50px",
		[theme.breakpoints.up("sm")]: {
			paddingTop: "100px",
		},
	},
	header: {
		padding: "0.65em",
		fontSize: "1.75rem",
		[theme.breakpoints.up("sm")]: {
			fontSize: "2.5rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "3rem",
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: "3.5rem",
		},
	},
	heroContainer: {
		height: "100%",
	},
	hotelImg: {
		height: "100%",
		objectFit: "cover",
		width: "100%",
	},
	searchDiv: {
		position: "absolute",
		[theme.breakpoints.down("xs")]: {
			width: "88.3%",
			top: "60%",
		},
		[theme.breakpoints.up("sm")]: {
			width: "95%",
			top: "68%",
			left: "50%",
			transform: "translateX(-50%)",
		},
		[theme.breakpoints.up("md")]: {
			width: "90%",
		},
		[theme.breakpoints.up("lg")]: {
			width: "85%",
		},
	},
}));