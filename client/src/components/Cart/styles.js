import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	drawerPaper: {
    width: 400,
		[theme.breakpoints.down("xs")]: {
			width: 300,
		},
	},
	div: {
		"@media (max-width:450px)": {
			width: "inherit",
		},
	},
	cartContainer: {
		padding: 30,
		"@media (max-width:450px)": {
			paddingLeft: 40,
			paddingRight: 20,
			width: "inherit",
		},
	},
	colContainer: {
		marginBottom: 40,
		marginTop: 20,
		paddingRight: 20,
		paddingLeft: 20,
		display: "flex",
		justifyContent: "space-between",
	},
	btn: {
		backgroundColor: "#ffb347",
		color: "#fff",
		height: 50,
		width: 150,
		marginBottom: 30,
	},
	header: {
		backgroundColor: "#6464ff",
		height: 75,
		boxShadow: "-3px -7px 5px 10px #888888",
	},
	cartDiv: {
		height: "100vh",
	},

	footer: {
		backgroundColor: "#6464ff",
		minHeight: 45,
		boxShadow: "-3px 7px 7px 10px #888888",
	},
	backBtnCont: {
		display: "none",
		"@media (max-width:450px)": {
			padding: 20,
			display: "block",
		},
	},
	backBtn: {
		borderColor: "#ffb347",
	},
}));
