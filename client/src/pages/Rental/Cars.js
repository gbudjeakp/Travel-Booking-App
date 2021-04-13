/** @format */

import React, { useState } from "react";
import {
	Grid,
	Box,
	Container,
	Paper,
	Typography,
	Switch,
	TextField,
	FormControlLabel,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from "@material-ui/core";
import useStyles from "./CarStyle";

import classNames from "classnames";

import AddCartButton from "../../components/Cart/AddToCartButton";
//Mock Data

const CarList = [
	{
		name: "Fiat 500",
		price: "62",
		total: "125",
		comment: "Or similar / Sedan",
		url: "https://drive.google.com/uc?id=1GuQ-LDMfBnkO5SQY5le0wqq2a8OnwEhl",
	},
	{
		name: "Jeep ",
		price: "25",
		total: "132",
		comment: "Or similar / Sedan",
		url: "https://drive.google.com/uc?id=1COvvFLhKKfSdrthD5vNg9NAq1mPgsJji",
	},
	{
		name: "Peugeot 208",
		price: "67",
		total: "136",
		comment: "Or similar / Sedan",
		url: "https://drive.google.com/uc?id=1dFv1WeIjdbAGO5eiKYM6TbqDsGGAu4rq",
	},
	{
		name: "Peugeot 308",
		price: "69",
		total: "138",
		comment: "Or similar / Sedan",
		url: "https://drive.google.com/uc?id=1sxxaGrfKS3S8XUdG9xim_GdwXlKUfujR",
	},
	{
		name: "Honda civic",
		price: "25",
		total: "132",
		comment: "Or similar / Sedan",
		url: "https://drive.google.com/uc?id=1Feaixf_o87HkyIGYfwupBq6lHl5XmtRk",
	},
	{
		name: "Nissan March Ak12",
		price: "45",
		total: "120",
		comment: "Or similar / Sedan",
		url: "https://drive.google.com/uc?id=1Bk-DvIXkr2B5BfGe_V6oACKHHwegVVZk",
	},
	{
		name: "Mazda",
		price: "25",
		total: "132",
		comment: "Or similar / Sedan",
		url: "https://drive.google.com/uc?id=1BwR493KbJ8Nm2lsqttStrxZxPBT2BCL3",
	},
	{
		name: "Nissan pulsar",
		price: "25",
		total: "132",
		comment: "Or similar / Sedan",
		url: "https://drive.google.com/uc?id=1RNJc5fZTw5Q-yOE_uF4rka6LTT5DekC6",
	},
];

const Cars = () => {
	const classes = useStyles();
	const [checkState, setCheckState] = useState(false);
	const handleChange = (event) => {
		setCheckState(event.target.checked);
	};
	return (
		<Container className={classes.pageContainer}>
			<Grid container spacing={3}>
				<Grid item container xs={12} sm={6} md={7}>
					<Grid item xs={6} className={classes.textField1}>
						<TextField
							id="pickUpLocation"
							label="Pick-up"
							value="Paris CDG Airport"
							disabled
							InputProps={{
								disableUnderline: true,
								classes: { disabled: classes.disabled },
							}}
							InputLabelProps={{
								classes: { root: classes.labelFont },
							}}
						/>
					</Grid>
					<Grid item xs={6} className={classes.textField2}>
						<TextField
							id="returnLocation"
							label="Return"
							value="Paris City Center"
							disabled
							InputProps={{
								disableUnderline: true,
								classes: {
									disabled: classes.disabled,
								},
							}}
							InputLabelProps={{
								classes: { root: classes.labelFont },
							}}
						/>
					</Grid>
				</Grid>
				<Grid item container xs={12} sm={6} md={5} className={classes.returns}>
					<Grid item xs={6} className={classes.textField1}>
						<TextField
							id="pickUpDate"
							label="Pick-up date"
							value="Thu, Jan 1 10:00 AM"
							disabled
							InputProps={{
								disableUnderline: true,
								classes: {
									disabled: classes.disabled,
								},
							}}
							InputLabelProps={{
								classes: { root: classes.labelFont },
							}}
						/>
					</Grid>
					<Grid item xs={6} className={classes.textField2}>
						<TextField
							id="returnDate"
							label="Return date"
							value="Thu, Jan 3 10:00 PM"
							disabled
							InputProps={{
								disableUnderline: true,
								classes: {
									disabled: classes.disabled,
								},
							}}
							InputLabelProps={{
								classes: { root: classes.labelFont },
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid container alignItems="center" className={classes.filterContainer}>
				<Grid item sm={2} md={4} lg={5}>
					<Typography
						className={classNames(classes.filter0, classes.countResult)}
					>
						8 Offers
					</Typography>
				</Grid>
				<Grid
					item
					container
					xs={12}
					sm={10}
					md={8}
					lg={7}
					className={classes.filterContainer}
					spacing={1}
					alignItems="center"
				>
					<Grid item xs={12} sm={3} lg={4} className={classes.switch}>
						<FormControlLabel
							control={
								<Switch
									onChange={handleChange}
									color="secondary"
									checked={checkState}
									name="checkedA"
									className={classes.switchColor}
								/>
							}
							label={<Typography>Automatic Only</Typography>}
							labelPlacement="start"
						/>
					</Grid>
					<Grid item xs={12} sm={3} lg={2} className={classes.smallSelect}>
						<FormControl
							variant="outlined"
							fullWidth
							className={classes.selectBorder}
						>
							<InputLabel id="vehicleType">Vehicle Type</InputLabel>
							<Select
								labelId="vehicleTypeLabel"
								id="vehicleTypeSelect"
								label="vehicleType"
								classes={{
									selectMenu: classes.selectHeight,
									outlined: classes.border,
									iconOutlined: classes.selectIcon,
								}}
							>
								<MenuItem value={0}>
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>Hatchback</MenuItem>
								<MenuItem value={2}>Convertible</MenuItem>
								<MenuItem value={3}>Sports</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={3} lg={2} className={classes.smallSelect}>
						<FormControl
							variant="outlined"
							fullWidth
							className={classes.selectBorder}
						>
							<InputLabel id="driverFilter">Driver</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								label="Age"
								classes={{
									selectMenu: classes.selectHeight,
									outlined: classes.border,
									iconOutlined: classes.selectIcon,
								}}
							>
								<MenuItem value={0}>
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>Driver 25+</MenuItem>
								<MenuItem value={2}>Driver 30+</MenuItem>
								<MenuItem value={3}>Driver 50+</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={3} lg={4} className={classes.largeSelect}>
						<FormControl
							variant="outlined"
							fullWidth
							className={classes.selectBorder}
						>
							<InputLabel id="demo-simple-select-outlined-label">
								Price
							</InputLabel>
							<Select
								labelId="price"
								id="demo-simple-select-outlined"
								label="Age"
								autoWidth
								classes={{
									selectMenu: classes.selectHeight,
									outlined: classes.border,
									iconOutlined: classes.selectIcon,
								}}
							>
								<MenuItem value={0}>
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>Lower Price First</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={3}
				justify="center"
				className={classes.gridContainer}
			>
				{CarList.map((car) => (
					<Grid item key={car.name} xs={12} sm={6} md={4} lg={3}>
						<Paper elevation={3} className={classes.paperContainer}>
							<Box className={classes.headerInformation}>
								<Box className={classes.bottomInformationContainer}>
									<span className={classes.legend1}>{car.name}</span>
									<span
										className={classNames(classes.subLegend1, classes.comment)}
									>
										{car.comment}
									</span>
								</Box>
							</Box>
							<Box className={classes.imageContainer}>
								<img className={classes.image} src={car.url} alt="carImage" />
							</Box>
							<Box className={classes.bottomInformationContainer}>
								<Box component="span" className={classes.legend1}>
									${car.price}
									<Box component="span" className={classes.subLegend1}>
										/per day
									</Box>
								</Box>
								<Box component="span" className={classes.legend2}>
									${car.total} Total
								</Box>
							</Box>
							<AddCartButton
								title="Select Car"
								variant="contained"
								color="primary"
								size="large"
								purchaseType="rentalCar"
								car={car}
							/>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Cars;
