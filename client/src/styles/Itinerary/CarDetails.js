/** @format */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	carTitle: {
		marginBottom: "1.5em",
		backgroundColor: "#ffb833",
		color: "white",
		padding: ".1em 1em",
		textAlign: "center",
	},
	carDetails: {
		padding: "1em",
		"&  p": {
			fontSize: ".75em",
		},
		backgroundColor: "#f2f2f2",
		[theme.breakpoints.up("lg")]: {
			"&  p": {
				fontSize: "1em",
			},
		},
	},
	carName: {
		fontWeight: "bolder",
		color: "black",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.3em",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "1.8em",
		},
	},
	carImg: {
		padding: "1em",
		[theme.breakpoints.up("md")]: {
			padding: "1em 1.5em 1em .75em",
			"& > img": {
				height: "60%",
			},
		},
		[theme.breakpoints.up("lg")]: {
			padding: "1em 3em 1em .75em",
			"& > img": {
				height: "100%",
			},
		},
	},
	carRental: {
		fontWeight: "bolder",
		fontSize: "1.1em",
	},
	carInfo: {
		marginBottom: "1em",
	},
}));

export default useStyles;
