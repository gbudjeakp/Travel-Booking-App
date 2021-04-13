/** @format */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	airlineLogo: {
		flexBasis: "12.66%",
		maxWidth: "12.66%",
	},
	departHeader: {
		fontSize: "1.1em",
		[theme.breakpoints.up("md")]: {
			fontSize: "1.3em",
		},
	},
	departSubtitle: {
		color: "#b3b3b3",
		fontWeight: "bolder",
		fontSize: "1em",
		[theme.breakpoints.up("md")]: {
			fontSize: "1.3em",
		},
	},
	hide: {
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	departPriceBold: {
		color: "#8080ff",
		fontSize: "15px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.1em",
		},
	},
	departLogo: {
		padding: ".846em 0 .846em .75em",
	},
	timeWithStop: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	timeWithoutStop: {
		[theme.breakpoints.up("xs")]: {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	departure: {
		borderRight: "1px solid #a6a6a6",
		padding: "0 1em 0 1.2em",
		[theme.breakpoints.down("xs")]: {
			padding: "0 1em 0 0",
		},
	},
	departureDate: {
		paddingLeft: "1em",
	},
	buttonBox: {
		textAlign: "end",
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	btnMobile: {
		textAlign: "right",
		"& button": {
			backgroundColor: "orange",
			"&:hover": {
				backgroundColor: "orange",
			},
		},
		[theme.breakpoints.up("sm")]:{
			display: "none"
		}
	},
	button: {
		fontSize: "0.95em",
		backgroundColor: "#FFA000",
		"&:hover": {
			backgroundColor: "#FFA000",
		},
		[theme.breakpoints.up("xs")]: {
			"& span": {
				fontSize: ".75em",
			},
			padding: "0.65rem .75em",
		},
		[theme.breakpoints.up("sm")]: {
			"& span": {
				fontSize: "1em",
			},
			padding: "0.65rem 2em",
		},
		[theme.breakpoints.up("md")]: {
			"& span": {
				fontSize: "1.2em",
			},
			padding: "0.75rem 2em",
		},
	},
	accordion: {
		borderBottom: "1px solid rgba(0, 0, 0, .105)",
		boxShadow: "none",
		"&$expanded": {
			margin: 0,
		},
		"&:last-child": {
			borderBottom: "none",
		},
		flexGrow: 1,
	},
	summary: {
		padding: "0.5em 2.2em 0.5em 1.5em",
		minHeight: "48px",
		"&$expanded": {
			minHeight: "48px",
			padding: "0.155em 2.2em 0.155em 1.5em",
		},
	},
	summaryInfo: {
		[theme.breakpoints.up("sm")]: {
			flexBasis: "87.2%",
			maxWidth: "87.2%",
		},
		[theme.breakpoints.down("xs")]: {
			"& div:nth-child(1)": {
				order: 1,
			},
			"& div:nth-child(5)": {
				order: 2,
			},
			"& div:nth-child(7)": {
				order: 3,
			},
			"& div:nth-child(9)": {
				order: 4,
			},
			"& div:nth-child(2)": {
				order: 5,
			},
			"& div:nth-child(8)": {
				order: 6,
			},
			"& div:nth-child(10)": {
				order: 7,
			},
		},
		"& div *": {
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis",
		},
	},
	summaryLogo: {
		paddingTop: "1em",
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	content: {
		margin: "12px 0",
		"&$expanded": {
			margin: "12px 0",
		},
	},
	timeline: {
		fontSize: "13px",
		[theme.breakpoints.down("xs")]: {
			"& > *": {
				fontSize: ".95em",
			},
		},
	},
	timelineItem: {
		"&:before": {
			flex: 0,
			padding: 0,
		},
		minHeight: "55px",
	},
	timelineDot: {
		padding: "3px",
		borderWidth: "1px",
		margin: 0,
	},
	timelineConnector: {
		width: "0.3px",
		backgroundColor: "#ced4da",
	},
	timelineContent: {
		padding: "0 16px",
		marginTop: "-5px",
		fontWeight: "bolder",
	},
	timelineInsert: {
		color: "#a6a6a6",
		marginTop: "0.75em",
		fontSize: "13px",
		fontWeight: "bold",
		[theme.breakpoints.down("xs")]: {
			fontSize: ".95em",
		},
	},
	timelineAfter: {
		color: "#a6a6a6",
		"&:not(:last-child)": {
			marginTop: "1.4em",
		},
		fontSize: "13px",
		fontWeight: "bold",
		[theme.breakpoints.down("xs")]: {
			fontSize: ".95em",
		},
	},
	timelineLast: {
		fontWeight: "bold",
		color: "black",
	},
	timelineDivider: {
		margin: "1em 0",
	},
	separator: {
		height: "55px",
	},
	expanded: {},
}));

export default useStyles;
