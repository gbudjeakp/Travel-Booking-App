/** @format */
import React from "react";
import { Grid, Typography } from "@material-ui/core";
import HotelRoom from "../assets/images/hotel-room.png";
import HotelSearch from "../components/HotelSearch";
import useStyles from "../styles/Hotel";

function Hotels() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid classes={{ container: classes.container }} container>
				<Grid className={classes.titleContainer} item xs={5}>
					<Typography className={classes.header}>
						Find the best hotels around the world.
					</Typography>
				</Grid>
				<Grid className={classes.heroContainer} item xs={7}>
					<img
						className={classes.hotelImg}
						src={HotelRoom}
						alt="a look inside of a random hotel room"
					/>
				</Grid>
			</Grid>
			<div className={classes.searchDiv}>
				<HotelSearch />
			</div>
		</div>
	);
}

export default Hotels;
