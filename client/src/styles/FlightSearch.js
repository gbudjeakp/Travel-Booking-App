/** @format */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	paperContainer: {
		[theme.breakpoints.up("xs")]: {
			padding: "3em",
			borderRadius: 0,
		},
		[theme.breakpoints.up("sm")]: {
			padding: "3em 4em",
			borderRadius: "20px",
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
		[theme.breakpoints.up("sm")]: {
			flexBasis: "19%",
			maxWidth: "19%",
		},
		[theme.breakpoints.up("md")]: {
			flexBasis: "11%",
			maxWidth: "11%",
		},
		[theme.breakpoints.up("lg")]: {
			flexBasis: "12%",
			maxWidth: "12%",
		},
	},
	input: {
		[theme.breakpoints.up("sm")]: {
			"&:nth-child(5)": {
				flexBasis: "31%",
				maxWidth: "31%",
			},
		},
		[theme.breakpoints.up("md")]: {
			"&:nth-child(3)": {
				flexBasis: "20%",
			},
			"&:nth-child(4)": {
				flexBasis: "20%",
			},
			"&:nth-child(5)": {
				flexBasis: "15%",
				maxWidth: "15%",
			},
		},
		[theme.breakpoints.up("lg")]: {
			"&:nth-child(1)": {
				flexBasis: "17.6%",
				maxWidth: "17.6%",
			},
			"&:nth-child(2)": {
				flexBasis: "17.6%",
				maxWidth: "17.6%",
			},
			"&:nth-child(3)": {
				flexBasis: "17.6%",
				maxWidth: "17.6%",
			},
			"&:nth-child(4)": {
				flexBasis: "17.6%",
				maxWidth: "17.6%",
			},
			"&:nth-child(5)": {
				flexBasis: "17.6%",
				maxWidth: "17.6%",
			},
		},
		[theme.breakpoints.down("md")]: {
			"& *": {
				fontSize: "1em",
			},
		},
	},
	width: {
		[theme.breakpoints.up("md")]: {
			paddingRight: "1.5em",
			borderRight: "1px solid lightgray",
		},
		width: "100%",
	},
	traveller: {
		borderRight: "none",
	},
	font: {
		fontWeight: "bold",
		fontSize: "1.5em",
		[theme.breakpoints.down("lg")]: {
			fontSize: "1.4em",
		},
	},
}));
