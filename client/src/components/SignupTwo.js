/** @format */

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  InputBase,
  LinearProgress
} from "@material-ui/core";
import { useStyles } from "../styles/Signup_in";

import { Link } from "react-router-dom";

import { useStateContext, useDispatchContext } from "../context";

import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Autocomplete } from "@material-ui/lab";

const SignupTwo = ({ dash, close, user }) => {
  const classes = useStyles();
  const { cities } = useStateContext();
  const dispatch = useDispatchContext();
  const [travelList, setTravelList] = useState([]);
  const [homeTownList, setHomeTownlist] = useState([]);
  const [destination, setDestination] = useState("");
  const [selectCityError, setSelectCityError] = useState(false);
  const [open, setOpen] = useState(false);
  const [typeInput, setTypeInput] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [citiesApi, setCitiesApi] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTextChange = (_, value) => {
    if (typeInput === "city") {
      setDestination(value);
    }
    if (typeInput === "hometown") {
      setHomeTown(value);
    }
  };

  const handleInputFetch = async (event, value, reason) => {
    if (value === "") return;
    if (reason === "input") {
      try {
        const response = await fetch(`/api/flights/places/${value}`);
        const data = await response.json();
        setCitiesApi(data.Places);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const openAdd = (type) => {
    setTypeInput(type);
    setSelectCityError(false);
    setOpen(!open);
    setDestination("");
  };

  const handleAdd = () => {
    if (typeInput === "city") {
      const newAdd = destination.trim();
      const isInList = travelList.includes(newAdd);

      if (destination.length === 0) {
        setSelectCityError(true);
      } else {
        if (isInList) {
          setDestination("");
          setOpen(!open);
        } else {
          setTravelList((prevState) => [...prevState, newAdd]);
          setDestination("");
          setOpen(!open);
        }
      }
    }
    if (typeInput === "hometown") {
      const newAdd = homeTown.trim();
      const isInList = homeTownList.includes(newAdd);
      if (homeTown.length === 0) {
        setSelectCityError(true);
      } else {
        if (isInList) {
          setHomeTown("");
          setOpen(!open);
        } else {
          setHomeTownlist((prevState) => [...prevState, newAdd]);
          setHomeTown("");
          setOpen(!open);
        }
      }
    }
  };

  const handleDelete = (place) => {
    if (typeInput === "city") {
      const newList = travelList.filter(
        (t) => t.toLowerCase() !== place.toLowerCase(),
      );
      setTravelList(newList);
    }
    if (typeInput === "hometown") {
      const newList = homeTownList.filter(
        (t) => t.toLowerCase() !== place.toLowerCase(),
      );
      setHomeTownlist(newList);
    }
  };

  const handleSubmit = async (event) => {
    const userId = user?._id;
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`/api/users/${userId}/favorite-cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cities: travelList }),
      });
      const homeRes = await fetch(`/api/users/${userId}/add-hometown`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ homeTown: homeTownList }),
      });
      const homeResData = await homeRes.json();
      const homeTownToAdd = homeResData.data.user.homeTown;
      const resData = await res.json();
      resData.data.user.homeTown = homeTownToAdd;
      setLoading(false);
      if (resData.message === "Updated") {
        dispatch({ type: "AUTHENTICATED", payload: resData.data });
        close();
      } else {
        dash();
      }
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  return (
    <Container
      id="modal-content"
      maxWidth="xs"
      className={classes.paper}
      classes={{ root: classes.contain }}
    >
      <Box textAlign="right" className="modal-header">
        <IconButton onClick={() => close()}>
          <CloseIcon classes={{ root: classes.closeModal }} />
        </IconButton>
      </Box>
      <div className={`modal-body ${classes.modalBody}`}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          className={classes.modalTitle}
        >
          Success!
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          align="center"
          className={classes.modalSubtitle}
        >
          Please select your favorite travel destinations
        </Typography>
        <Grid container spacing={1}>
          {travelList.length > 0 && (
            <Grid container justify="center" style={{ margin: 10 }}>
              <Typography style={{ color: "#9966ff", fontWeight: 600 }}>
                Destination
              </Typography>
            </Grid>
          )}
          {travelList.map((place) => (
            <Grid key={place} item xs={12}>
              <InputBase
                name={place}
                id={place}
                value={place}
                readOnly
                fullWidth
                classes={{ root: classes.inputBase, input: classes.input }}
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOnOutlinedIcon
                      classes={{ root: classes.locationIcon }}
                    />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={`remove ${place}`}
                      onClick={() => handleDelete(place)}
                      size="small"
                    >
                      <CloseIcon classes={{ root: classes.closeIcon }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={1}>
          {homeTownList.length > 0 && (
            <Grid container justify="center" style={{ margin: 10 }}>
              <Typography style={{ color: "#9966ff", fontWeight: 600 }}>
                Hometown
              </Typography>
            </Grid>
          )}
          {homeTownList.map((place) => (
            <Grid key={place} item xs={12}>
              <InputBase
                name={place}
                id={place}
                value={place}
                readOnly
                fullWidth
                classes={{ root: classes.inputBase, input: classes.input }}
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOnOutlinedIcon
                      classes={{ root: classes.locationIcon }}
                    />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={`remove ${place}`}
                      onClick={() => handleDelete(place)}
                      size="small"
                    >
                      <CloseIcon classes={{ root: classes.closeIcon }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" mt={3} mb={2}>
          {open ? (
            <Autocomplete
              freeSolo
              id="add-destination"
              name="add-destination"
              value={typeInput === "city" ? destination : homeTown}
              options={
                typeInput === "city"
                  ? cities?.map((option) => option.name)
                  : citiesApi?.map((option) => option.PlaceName)
              }
              onChange={handleTextChange}
              onInputChange={(event, value, reason) => {
                handleInputFetch(event, value, reason);
              }}
              classes={{ inputRoot: classes.inputRoot }}
              renderInput={(params) => {
                params.InputProps.startAdornment = (
                  <InputAdornment position="start">
                    <HighlightOffIcon
                      style={{ cursor: "pointer" }}
                      onClick={openAdd}
                    />
                  </InputAdornment>
                );
                params.InputProps.endAdornment = (
                  <InputAdornment position="end">
                    <AddIcon
                      onClick={handleAdd}
                      style={{ cursor: "pointer" }}
                    />
                  </InputAdornment>
                );
                return (
                  <TextField
                    {...params}
                    color="secondary"
                    helperText={selectCityError ? "Please enter place" : ""}
                    error={selectCityError}
                  />
                );
              }}
            />
          ) : (
            <>
              <Grid>
                <Button
                  disabled={travelList.length === 3 ? true : false}
                  className={classes.link}
                  onClick={() => openAdd("city")}
                >
                  Add favorite city
                </Button>
              </Grid>
              <Grid style={{ marginTop: 10 }}>
                <Button
                  disabled={homeTownList.length === 1 ? true : false}
                  className={classes.link}
                  onClick={() => openAdd("hometown")}
                >
                  Add hometown
                </Button>
              </Grid>
            </>
          )}
        </Box>
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            size="large"
            classes={{ root: classes.modalSubmit }}
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Box>
      </div>
      {/* Need to change the footer if user is automatically signed in. */}
      <div className="modal-footer">
        <Typography
          component="p"
          variant="subtitle1"
          align="center"
          className={classes.modalFooter}
        >
          Already have an account?{" "}
          <Link to="/signin" className={classes.link}>
            Sign In
          </Link>
        </Typography>
      </div>
      {loading &&  <LinearProgress color="secondary" />}
    </Container>
  );
};
export default SignupTwo;
