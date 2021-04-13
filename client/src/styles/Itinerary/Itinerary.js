/** @format */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	tripHistoryContainer: {
		padding: "3em 1.5em 0 1.5em",
		width: "100%",
		height: "100%",
		overflow: "scroll",
		[theme.breakpoints.down("xs")]: {
			paddingLeft: "6em"
		}
	},
	activeBtn: {
		padding: "0.75em 1em",
		marginRight: "0.75em",
		marginBottom: "1.5em",
		backgroundColor: "orange",
		"&:hover": {
			color: "white",
			backgroundColor: "orange",
		},
	},
	inactiveBtn: {
		padding: "0.75em 1em",
		marginRight: "0.75em",
		marginBottom: "1.5em",
		color: "orange",
		backgroundColor: "#e6e6e6",
		boxShadow: "none",
		"&:hover": {
			color: "white",
			backgroundColor: "orange",
		},
	},
	subtitle: {
		color: "#a6a6a6",
		marginBottom: "1.5em",
	},
	divider: {
		marginBottom: "2em",
	},
	margin: {
		marginTop: "3em",
	},
	noTrips: {
		textAlign: "center",
		"& button": { marginTop: "2em" },
		"& h4": {
			marginTop: "1em",
			fontWeight: "bolder",
			fontSize: "1.75em"
		},
	},
}));

export default useStyles;
