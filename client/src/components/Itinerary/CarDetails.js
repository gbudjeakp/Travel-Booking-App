/** @format */
import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "../../styles/Itinerary/CarDetails";

const CarDetails = ({ car }) => {
	const classes = useStyles();
	return (
		<div>
			<Typography component="h6" variant="h6" className={classes.carTitle}>
				Car Rental
			</Typography>
			<Grid container>
				<Grid item md={6} className={classes.carImg}>
					<img width="100%" height="100%" src={car.imageUrl} alt={car.name} />
				</Grid>
				<Grid item container md={6} className={classes.carDetails}>
					<Grid item xs={12} className={classes.carInfo}>
						<div className={classes.details}>
							<Typography
								component="h5"
								variant="h5"
								className={classes.carName}
							>
								{car.name}
							</Typography>
							<Typography>5 Passengers</Typography>
							<Typography>Automatic Transmission</Typography>
							<Typography>Air Conditioning</Typography>
							<Typography>29 miles/gallon</Typography>
						</div>
					</Grid>
					<Grid item sm={12}>
						<Typography className={classes.carRental}>
							{car.total} USD Per Day
						</Typography>
						<Typography>{`Location: ${car.location}`}</Typography>
						<Typography>
							Pick Up:{" "}
							<span className={classes.carRental}>{car.rentOutDate}</span> at{" "}
							{car.rentOutTime}
						</Typography>
						<Typography>
							Drop Off:{" "}
							<span className={classes.carRental}>{car.returnRentalDate}</span>{" "}
							at {car.returnRentalTime}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
export default CarDetails;
