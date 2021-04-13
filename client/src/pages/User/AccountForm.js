import React from "react";

import {
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  InputLabel,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { accountStyles } from "./ProfileStyle";

const AccountForm = ({
  handleSubmit,
  handleHometown,
  setHometown,
  email,
  homeTown,
  homeTownCities,
  disabled,
  updated,
  name,
}) => {
  const classes = accountStyles();

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <Paper className={classes.paper} elevation={4}>
          <Typography variant="h2" className={classes.title}>
            Account Settings
          </Typography>
          <div className={classes.line}></div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputLabel className={classes.label}>Name</InputLabel>
              <TextField
                required
                variant="outlined"
                id="name"
                type="text"
                value={name}
                error={!name ? true : false}
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className={classes.label}>Email</InputLabel>
              <TextField
                required
                variant="outlined"
                id="email"
                type="email"
                value={email}
                error={!email ? true : false}
                fullWidth
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className={classes.label}>Address Line 1</InputLabel>
              <TextField
                variant="outlined"
                id="address1"
                name="address1"
                value="123 Fake Street"
                fullWidth
                autoComplete="shipping address-line1"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className={classes.label}>Address Line 2</InputLabel>
              <TextField
                variant="outlined"
                id="address2"
                name="address2"
                value="1234 CA CANADA"
                fullWidth
                autoComplete="shipping address-line2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className={classes.label}>Hometown</InputLabel>
              <Autocomplete
                freeSolo
                id="hometown"
                variant="outlined"
                name="hometown"
                type="text"
                value={homeTown}
                options={homeTownCities?.map((city) => city.PlaceName)}
                onInputChange={(event, value, reason) => {
                  handleHometown(event, value, reason);
                }}
                onChange={(_, value) => setHometown(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="secondary"
                    variant="outlined"
                    className={classes.width}
                    error={!homeTown ? true : false}
                    InputLabelProps={{
                      shrink: true,
                      classes: { root: classes.font },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className={classes.label}>
                State/Province/Region
              </InputLabel>
              <TextField
                variant="outlined"
                id="state"
                name="state"
                value="BC"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className={classes.label}>Zip/Postal code</InputLabel>
              <TextField
                variant="outlined"
                required
                id="zip"
                name="zip"
                value="V31 115 VS8"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel className={classes.label}>Country</InputLabel>
              <TextField
                variant="outlined"
                required
                id="country"
                name="country"
                value="CANADA"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
          </Grid>
          <Grid
            container
            justify="flex-end"
            style={{ paddingTop: 40, paddingBottom: 30 }}
          >
            <Button
              variant="contained"
              className={classes.button}
              disabled={disabled}
              onClick={handleSubmit}
            >
              {updated ? (
                <CheckCircleOutlineIcon style={{ color: "green" }} />
              ) : (
                <Typography>Update</Typography>
              )}
            </Button>
          </Grid>
        </Paper>
      </form>
    </>
  );
};

export default AccountForm;
