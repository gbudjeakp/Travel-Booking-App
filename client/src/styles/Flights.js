/** @format */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	rootWithoutResults: {
		height: "92%",
		backgroundColor: "#ededed",
		[theme.breakpoints.down("xs")]: {
			paddingLeft: "4em",
		},
	},
	rootWithResults: {
		height: "80%",
		[theme.breakpoints.down("xs")]: {
			paddingLeft: "4em",
		},
	},
	containerWithoutResults: {
		height: "74%",
		"& div:first-child": {
			height: "100%",
			backgroundColor: "#fff",
			flexBasis: "41.67%",
			paddingTop: "10%",
			textAlign: "center",
		},
		"& div:last-child": {
			height: "100%",
			flexBasis: "58.33%",
			width: "58.33%",
			transition: "flex-basis 7s, max-width 5s",
		},
		"& div:last-child > img": {
			height: "100%",
		},
	},
	containerWithResults: {
		height: "85%",
		"& div:first-child": {
			display: "none",
		},
		"& div:last-child": {
			flexBasis: "100%",
			maxWidth: "100%",
			height: "100%",
			transition: "max-width 600ms",
		},
		"& div:last-child > img": {
			height: "100%",
		}
	},
	titleContainer: {
		height: "100%",
		backgroundColor: "#fff",
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
	heroImg: {
		height: "100%",
		objectFit: "cover",
		width: "100%",
	},
	searchDiv: {
		position: "absolute",
		[theme.breakpoints.up("xs")]: {
			width: "88.3%",
			top: "60%",
		},
		[theme.breakpoints.up("sm")]: {
			width: "90%",
			top: "64%",
			left: "50%",
			transform: "translateX(-50%)",
		},
		[theme.breakpoints.up("md")]: {
			top: "68.5%",
		},
		[theme.breakpoints.up("lg")]: {
			width: "85%",
		},
	},
}));
