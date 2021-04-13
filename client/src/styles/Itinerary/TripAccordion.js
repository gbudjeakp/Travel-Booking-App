/** @format */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	departTime: {
		marginLeft: "-0.5em",
	},
	departHeader: {
		fontSize: "1.9em",
		[theme.breakpoints.down("md")]: {
			fontSize: ".95em",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: ".8em",
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: "1.1em",
		},
	},
	departSubtitle: {
		color: "#b3b3b3",
		fontWeight: "bolder",
		fontSize: "0.8em",
		[theme.breakpoints.up("md")]: {
			fontSize: "0.75em",
		},
		[theme.breakpoints.up("xl")]: {
			fontSize: "1em",
		},
	},
	departDuration: {
		paddingLeft: "4.65em",
		[theme.breakpoints.up("xs")]: {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			paddingLeft: "2em",
			display: "flex",
		},
	},
	departStop: {
		paddingLeft: "4.65em",
		[theme.breakpoints.up("xs")]: {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			paddingLeft: "4em",
			display: "flex",
		},
	},
	departPriceBold: {
		color: "orange",
		fontSize: "0.9em",
		[theme.breakpoints.up("xs")]: {
			fontSize: ".95em",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "0.8em",
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: "1.1em",
		},
	},
	tripLogo: {
		padding: ".846em 0 .846em .75em",
	},
	departure: {
		borderRight: "1px solid #a6a6a6",
		padding: "0 1em 0 1.2em",
	},
	departureDate: {
		paddingLeft: "1em",
	},
	accordion: {
		border: "1px solid rgba(0, 0, 0, .07)",
		"&$expanded": {
			margin: 0,
		},
		"&:last-child": {
			borderBottom: "none",
		},
		flexGrow: 1,
	},
	summary: {
		padding: "0 1em 0 1em",
		minHeight: "48px",
		"&$expanded": {
			minHeight: "48px",
			padding: "0.155em 2.2em 0.155em 1em",
		},
		[theme.breakpoints.up("sm")]: {
			padding: "0.5em 1em 0.5em 1em",
			"&$expanded": {
				padding: "0.5em 1em 0.5em 1em",
			},
		},
		[theme.breakpoints.up("md")]: {
			padding: "0.5em 2.2em 0.5em 1em",
			"&$expanded": {
				padding: "0.5em 2.2em 0.5em 1em",
			},
		},
	},
	content: {
		margin: "12px 0",
		"&$expanded": {
			margin: "12px 0",
		},
	},
	expanded: {},
	priceSummary: {
		fontWeight: "bolder",
		fontSize: "1.2em",
	},
	icon: {
		color: "white",
		backgroundColor: "gray",
		marginBottom: ".2em",
		borderRadius: ".9em",
		padding: ".07em",
		[theme.breakpoints.up("sm")]: {
			fontSize: "1em",
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: "1.3em",
		},
	},
	iconContainer: {
		textAlign: "right",
	},
	iconGrid: {
		[theme.breakpoints.down("sm")]: {
			justifyContent: "flex-end",
		},
	},
	details: {
		padding: "0 1em",
	},
}));

export default useStyles;
