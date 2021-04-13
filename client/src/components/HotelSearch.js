/** @format */

import React, { useState } from "react";
import { useDispatchContext } from "../context";
import { Grid, Paper, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import useStyles from "../styles/HotelSearch";

import AddToCartButton from "./Cart/AddToCartButton";

const HotelSearch = () => {
  const classes = useStyles();

  const cities = [
    { title: "Bali" },
    { title: "Vancouver" },
    { title: "Calgary" },
    { title: "Toronto" },
    { title: "Bangkok" },
  ];

  const [to, setTo] = useState("Bali");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [rooms, setRooms] = useState(1);
  const dispatch = useDispatchContext();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const newDate = new Date(year, month, day);
    return newDate.toISOString().split("T")[0];
  };

  const handleToLocation = (event, value) => {
    setTo(value);
  };
  const handleCheckIn = (date) => {
    setCheckInDate(date);
  };
  const handleCheckOut = (date) => {
    setCheckOutDate(date);
  };
  const handleRooms = (event) => setRooms(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedCheckInDate = formatDate(checkInDate);
    const formattedCheckOutDate = formatDate(checkOutDate);
    dispatch({
      type: "ADD_TO_CART",
      purhcaseType: "Hotel",
      item: {
        rooms: rooms,
        to: to,
        checkInDate: formattedCheckInDate,
        checkOutDate: formattedCheckOutDate,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper className={classes.paperContainer} elevation={7}>
        <Grid container spacing={3}>
          <Grid className={classes.input} xs={6} sm={2} md={3} item>
            <Autocomplete
              id="to"
              name="to"
              value={to}
              options={cities.map((option) => option.title)}
              onChange={handleToLocation}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Going to"
                  color="secondary"
                  className={classes.width}
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.font },
                  }}
                />
              )}
            />
          </Grid>
          <Grid
            className={`${classes.input} ${classes.checkInGrid}`}
            xs={6}
            sm={3}
            item
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container>
                <KeyboardDatePicker
                  className={classes.width}
                  disableToolbar
                  variant="inline"
                  autoOk
                  format="MM/dd/yyyy"
                  id="checkInDate"
                  label="Check-in"
                  value={checkInDate}
                  onChange={handleCheckIn}
                  disablePast
                  KeyboardButtonProps={{ "aria-label": "change date" }}
                  InputProps={{ readOnly: true, color: "secondary" }}
                  InputLabelProps={{
                    classes: { root: classes.font },
                    color: "secondary",
                    shrink: true,
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid
            className={`${classes.input} ${classes.checkOutGrid}`}
            xs={6}
            sm={3}
            item
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container>
                <KeyboardDatePicker
                  className={classes.width}
                  disableToolbar
                  variant="inline"
                  autoOk
                  format="MM/dd/yyyy"
                  id="checkOutDate"
                  label="Check-out"
                  value={checkOutDate}
                  onChange={handleCheckOut}
                  disablePast
                  KeyboardButtonProps={{ "aria-label": "change date" }}
                  InputProps={{ readOnly: true, color: "secondary" }}
                  InputLabelProps={{
                    classes: { root: classes.font },
                    color: "secondary",
                    shrink: true,
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid
            item
            xs={6}
            sm={2}
            md={1}
            className={`${classes.input} ${classes.roomGrid}`}
          >
            <TextField
              name="rooms"
              id="rooms"
              value={rooms}
              color="secondary"
              label="Rooms"
              type="number"
              onChange={handleRooms}
              className={`${classes.width} ${classes.rooms}`}
              InputProps={{ inputProps: { min: 1 } }}
              InputLabelProps={{
                shrink: true,
                classes: { root: classes.font },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.btnContainer}>
            <AddToCartButton
              title="Select Hotel"
              variant="contained"
              color="primary"
              size="large"
              purchaseType="hotels"
            />
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default HotelSearch;
