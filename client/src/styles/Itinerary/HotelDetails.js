/** @format */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	hotelTitle: {
		marginBottom: "1.5em",
		backgroundColor: "#ffb833",
		color: "white",
		padding: ".1em 1em",
		textAlign: "center",
	},
	links: {
		color: "#005AEB",
	},
	hotelContainer: {
		padding: "1em",
		color: "#404040",
		marginBottom: "1em",
		width: "100%",
		[theme.breakpoints.up("lg")]: {
			"& $bold": {
				fontSize: "1em",
			},
		},
	},
	icons: { flexBasis: "6%" },
	hotelName: {
		fontWeight: "bolder",
		fontSize: "1.3em",
		color: "black",
		[theme.breakpoints.up("lg")]: {
			fontSize: "1.8em",
		},
	},
	bold: {
		fontWeight: "bolder",
		color: "black",
	},
	policyContainer: {
		marginTop: "1.5em",
		"&  p": {
			fontSize: ".8em",
		},
	},
	hotelPolicies: {
		fontWeight: "bolder",
		color: "black",
		fontSize: ".95em",
	},
	hotelImg: {
		overflow: "hidden",
		"& > img": {
			transition: "transform .5s ease",
		},
		"&:hover img": {
			transform: "scale(1.5)",
		},
	},
}));

export default useStyles;
