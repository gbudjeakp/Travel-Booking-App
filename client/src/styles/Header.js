/** @format */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		backgroundColor: "white",
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		zIndex: 0,
		width: `calc(100% - 150px)`,
		marginLeft: 150,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		[theme.breakpoints.up("sm")]: {
			width: "100%",
			marginLeft: 0,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		display: "none",
		[theme.breakpoints.down("xs")]: {
			display: "block",
		},
	},
	profileMenu: {
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	hide: {
		display: "none",
	},
	title: {
		flexGrow: 1,
		color: "#6464FF",
		fontSize: 20,
		fontWeight: 500,
		textDecoration: "none",
	},
	loginbtn: {
		backgroundColor: "#FFA000",
		color: "white",
		marginRight: theme.spacing(2),
		"&:hover": {
			backgroundColor: "#FFA000",
		},
	},
	pages: {
		display: "flex",
		fontSize: "14px",
		fontWeight: "bold",
		justifyContent: "space-evenly",
		marginRight: theme.spacing(3),
		width: "45%",
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	navlinks: {
		"&.active  *": {
			color: "#FFA000",
		},
		"&.active": {
			color: "#FFA000",
		},
		color: "#373737",
		textDecoration: "none",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	drawerPaper: {
		[theme.breakpoints.down("xs")]: {
			width: 150,
		},
		[theme.breakpoints.up("sm")]: {
			width: 0,
		},
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	drawer: {
		width: 150,
		flexShrink: 0,
		whiteSpace: "nowrap",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	drawerOpen: {
		width: 150,
		overflowX: "scroll",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	listIcon: {
		minWidth: "43.5px",
	},
}));

export default useStyles;