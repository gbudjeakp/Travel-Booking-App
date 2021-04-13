/** @format */

import { createMuiTheme } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	typography: {
		fontFamily: '"Roboto"',
		fontSize: 12,
		h1: {
			// could customize the h1 variant as well
		},
		button: {
			fontSize: "0.875rem",
			textTransform: "none",
		},
	},
	palette: {
		primary: { main: "#DF1B1B" },
		secondary: { main: "#737373" },
	},
	overrides: {
		MuiPickersDay: {
			daySelected: {
				backgroundColor: "orange",
				"&:hover": {
					backgroundColor: "orange",
				},
			},
			current: { color: "orange" },
		},
	},
});

export const CustomSmallerCheckBox = withStyles({
	root: {
		"& .MuiSvgIcon-root": { width: "15px", height: "15px" },
	},
})(Checkbox);
