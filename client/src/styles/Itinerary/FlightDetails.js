/** @format */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	border: {
		marginBottom: "1em",
	},
	flightInfo: {
		marginBottom: ".75em",
		color: "#595959",
		[theme.breakpoints.down("sm")]: {
			"& p": { fontSize: ".4em" },
		},
		[theme.breakpoints.down("md")]: {
			"& p": { fontSize: ".75em" },
		},
	},
	flightHeader: {
		padding: ".5em 0 .5em",
		marginBottom: "1.5em",
		backgroundColor: "#f2f2f2",
	},
	flightType: {
		fontWeight: "bold",
		color: "#000099",
		[theme.breakpoints.up("sm")]: {
			fontSize: ".75em",
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: ".86em",
		},
	},
	flightTypeGrid: {
		[theme.breakpoints.up("md")]: {
			flexBasis: "38.8%",
			maxWidth: "39%",
		},
	},
	layovers: {
		borderTop: "1px dotted #ced4da",
		borderBottom: "1px dotted #ced4da",
		padding: ".5em 0 .5em",
		margin: ".75em 0 .75em",
		fontWeight: "bold",
		color: "#000080",
	},
	arrow: {
		paddingLeft: "0.75em",
		[theme.breakpoints.up("xs")]: {
			fontSize: "1.2em",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "1.5em",
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: "1.875em",
		},
	},
	tripTime: {
		color: "#000080",
		fontSize: "0.9em",
		fontWeight: "bolder",
		textTransform: "uppercase",
		[theme.breakpoints.up("md")]: {
			fontSize: ".78em",
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: ".9em",
		},
	},
	stopHeader: {
		[theme.breakpoints.up("xs")]: {
			flexBasis: "0%",
			maxWidth: "0%",
			"& p": {
				display: "none",
			},
		},
		[theme.breakpoints.up("md")]: {
			flexBasis: "22.8%",
			maxWidth: "26%",
			"& p": {
				display: "flex",
				fontSize: ".75em",
			},
		},
		[theme.breakpoints.up("lg")]: {
			"& p": {
				fontSize: ".86em",
			},
		},
		"& p": {
			fontWeight: "bolder",
		},
	},
	travelHeader: {
		"& p": {
			fontWeight: "bolder",
		},
		[theme.breakpoints.up("sm")]: {
			"& p": {
				fontSize: ".75em",
			},
		},
		[theme.breakpoints.up("lg")]: {
			"& p": {
				fontSize: ".86em",
			},
		},
	},
	flightIcon: {
		color: "white",
		backgroundColor: "black",
		padding: ".05em",
		borderRadius: "16.5px",
	},
	flightIconContainer: {
		flexBasis: "13.5%",
		[theme.breakpoints.up("sm")]: {
			flexBasis: "15%",
		},
		[theme.breakpoints.up("md")]: {
			flexBasis: "10%",
		},
		[theme.breakpoints.up("lg")]: {
			flexBasis: "5.5%",
		},
	},
	flightSummary: {
		color: "#595959",
		marginBottom: "1em",
	},
	flightDate: {
		color: "black",
		fontSize: "1em",
		[theme.breakpoints.up("md")]: {
			fontSize: ".95em",
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: "1em",
		},
	},
	flightInfoFont: {
		[theme.breakpoints.up("md")]: {
			fontSize: ".75em",
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: ".86em",
		},
	},
	flightTitle: {
		marginBottom: "1.5em",
		backgroundColor: "#ffb833",
		color: "white",
		padding: ".1em 1em",
		textAlign: "center",
	},
}));

export default useStyles;
