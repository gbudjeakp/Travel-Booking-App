/** @format */

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	pageContainer: {
		padding: "4em 1.1em 0",
		[theme.breakpoints.down("xs")]: {
			padding: "2em 1.1em 1em 6em",
		},
	},
	paperContainer: {
		height: 300,
		borderRadius: 10,
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		overflow: "hidden",
		backgroundPosition: "center",
	},
	title: {
		margin: 5,
		textAlign: "center",
	},
	customCheckBoxRoot: {
		width: 5,
		height: 5,
	},
	bottomInformationContainer: {
		display: "flex",
		height: "20%",
		padding: 10,
		flexDirection: "column",
		justifyContent: "center",
		paddingLeft: 25,
	},
	headerInformation: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	bottomInformationSubContainer2: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-end",
	},
	imageContainer: {
		display: "flex",
		justifyContent: "center",
	},
	image: {
		maxWidth: 170,
		minWidth: 120,
	},
	subtitle2: {
		color: "#c5bec4",
		fontSize: 12,
	},
	favoriteDefaultIcon: {
		color: "black",
	},
	favoriteCheckedIcon: {
		color: "orange",
	},
	gridContainer: {
		marginTop: 23,
		height: "75%",
	},
	legend1: {
		fontSize: 15,
		color: "black",
		fontWeight: "bold",
	},
	legend2: {
		fontSize: 11,
		color: "black",
		fontWeight: "bold",
	},
	selectHeight: {
		minHeight: ".85em",
		height: ".85em",
	},
	switch: {
		[theme.breakpoints.down("md")]: {
			"& p": {
				fontSize: ".9em",
				color: "#4d4d4d",
			},
			"& .MuiFormControlLabel-labelPlacementStart": { marginLeft: 5 },
		},
		[theme.breakpoints.up("lg")]: {
			flexBasis: "34%",
			maxWidth: "34%",
		},
	},
	switchColor: {
		"& .Mui-checked": { color: "#6464FF" },
		"& .Mui-checked + .MuiSwitch-track": {
			backgroundColor: "#6464FF",
		},
	},
	smallSelect: {
		[theme.breakpoints.up("lg")]: {
			flexBasis: "20%",
			maxWidth: "20%",
		},
	},
	largeSelect: {
		[theme.breakpoints.up("lg")]: {
			flexBasis: "26%",
			maxWidth: "26%",
		},
	},
	selectBorder: {
		"& div": {
			borderRadius: "3em",
		},
		"& label": {
			fontSize: "1em",
			paddingLeft: "5px",
		},
	},
	selectIcon: {
		right: ".75em",
	},
	textField1: {
		border: "1px solid #cdcaca",
		borderRadius: "7px 0px 0px 7px",
		padding: "1em 0 1em 1.5em",
		height: "85%",
	},
	textField2: {
		border: "1px solid #cdcaca",
		padding: "1em 0 1em 1.5em",
		borderRadius: "0px 7px 7px 0px",
		borderLeft: "none",
		height: "85%",
	},
	labelFont: {
		fontSize: "1.4em",
		fontWeight: "bold",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.3em",
		},
	},
	disabled: {
		color: "black",
		fontWeight: "bold",
		textDecoration: "none",
		[theme.breakpoints.down("sm")]: {
			fontSize: ".95em",
		},
	},
	filterContainer: {
		marginTop: "1em",
	},
	filter0: {
		[theme.breakpoints.down("xs")]: {
			marginLeft: 5,
		},
		margin: 10,
	},
	countResult: {
		fontSize: 20,
		fontWeight: "bold",
	},
	subLegend1: {
		color: "grey",
		fontSize: 10,
		fontWeight: "bold",
	},
	comment: {
		fontSize: 11,
	},
}));
