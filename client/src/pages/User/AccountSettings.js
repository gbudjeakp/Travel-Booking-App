import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { useStateContext, useDispatchContext } from "../../context";

import AccountForm from "./AccountForm";

const useStyles = makeStyles(() => ({
  root: {
    padding: 40,
    paddingTop: 60,
    display: "flex",
    alignItems: "center",
  },
}));

function AccountSettings() {
  const classes = useStyles();
  const { user, loading } = useStateContext();
  const dispatch = useDispatchContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [homeTown, setHometown] = useState("");
  const [homeTownCities, setHometownCities] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [disabled, setDisableButton] = useState(true);

  useEffect(() => {
    if (loading) {
      return;
    } else {
      setName(user?.name);
      setEmail(user?.email);
      setHometown(user?.homeTown[0]);
    }
    if (updated) {
      setTimeout(() => {
        setUpdated(false);
      }, 3000);
    }
  }, [loading, updated, user]);

  const handleHometown = async (_, value, reason) => {
    if (value === "") return;
    if (reason === "input") {
      try {
        const response = await fetch(`/api/flights/places/${value}`);
        const data = await response.json();
        setDisableButton(false);
        setHometownCities(data.Places);
      } catch (error) {
        throw error;
      }
    }
  };

  const handleSubmit = async () => {
    const userId = user?._id;
    if (!name || !homeTown) return;
    try {
      const res = await fetch(`/api/users/${userId}/add-hometown`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ homeTown: homeTown }),
      });
      const updatedUser = await res.json();
      if (updatedUser.status === "Success") {
        dispatch({ type: "AUTHENTICATED", payload: updatedUser.data });
        const hometown = updatedUser.data.user.homeTown[0];
        setHometown(hometown);
        setUpdated(true);
        setDisableButton(true);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <Grid className={classes.root}>
      <AccountForm
        handleSubmit={handleSubmit}
        handleHometown={handleHometown}
        setHometown={setHometown}
        setDisableButton={setDisableButton}
        email={email}
        homeTown={homeTown}
        homeTownCities={homeTownCities}
        disabled={disabled}
        updated={updated}
        name={name}
      />
    </Grid>
  );
}

export default AccountSettings;
