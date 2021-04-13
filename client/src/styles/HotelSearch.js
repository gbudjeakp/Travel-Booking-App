/** @format */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	paperContainer: {
		borderRadius: "20px",
		[theme.breakpoints.down("xs")]: {
			padding: "2.5em 3em",
			borderRadius: 0,
		},
		[theme.breakpoints.up("sm")]: {
			padding: "3em 2em",
		},
		[theme.breakpoints.up("md")]: {
			padding: "3em 4em",
		},
	},

	searchBtn: {
		backgroundColor: "#ffb347",
		marginLeft: "",
		color: "#fff",
		padding: ".85em 0",
		width: "100%",
		"&:hover": {
			backgroundColor: "orange",
		},
		[theme.breakpoints.down("lg")]: {},
	},
	btnContainer: {
		[theme.breakpoints.up("lg")]: {
			flexBasis: "13%",
			maxWidth: "13%",
		},
		order: 5,
	},
	checkInGrid: {
		order: 2,
		[theme.breakpoints.down("xs")]: {
			order: 3,
		},
	},
	checkOutGrid: {
		order: 3,
		[theme.breakpoints.down("xs")]: {
			order: 4,
		},
	},
	roomGrid: {
		order: 4,
		[theme.breakpoints.down("xs")]: {
			order: 2,
		},
	},
	width: {
		[theme.breakpoints.up("sm")]: {
			borderRight: "1px solid lightgray",
			paddingRight: ".75em",
		},
		[theme.breakpoints.up("md")]: {
			paddingRight: "1.5em",
		},
		width: "100%",
	},
	rooms: {
		borderRight: "none",
	},
	font: {
		fontWeight: "bold",
		[theme.breakpoints.up("xs")]: {
			fontSize: "1.3em",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "1.5em",
		},
	},
}));
