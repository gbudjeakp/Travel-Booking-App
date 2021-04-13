/** @format */

import React, { useReducer, useEffect, useState} from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  LinearProgress
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "../styles/Signup_in";

const SignupOne = ({ next, close, signin, setUser }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const initialState = {
    name: "",
    emailSignup: "",
    pwdSignup: "",
    confirmPwdSignup: "",
    userInfo: {},
    emailError: false,
    nameValidationError: false,
    emailValidationError: false,
    pwdValidationError: false,
    confirmPwdValidationError: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "textChange":
        return {
          ...state,
          [action.name]: action.value,
          emailError: false,
          nameValidationError: false,
          emailValidationError: false,
          pwdValidationError: false,
          confirmPwdValidationError: false,
        };
      case "error":
        return { ...state, [action.error]: true };
      case "update":
        return state;
      case "reset":
        return initialState;
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "update" });
  }, [state]);

  const handleInputChange = (event) => {
    dispatch({
      type: "textChange",
      name: event.target.name,
      value: event.target.value,
    });
  };

  const checkUser = () => {
    const userPattern = new RegExp(
      `^(?=.*[A-Za-z].*[A-Za-z])[A-Za-z0-9@$!%*#?&]{4,}$`,
    );
    const userTest = userPattern.test(state.name);
    return userTest;
  };

  const checkEmail = () => {
    const emailPattern = new RegExp(`[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$`);
    const emailTest = emailPattern.test(state.emailSignup);
    return emailTest;
  };

  const checkPwd = () => {
    const pwdPattern = new RegExp(".{6,}");
    const pwdTest = pwdPattern.test(state.pwdSignup);
    return pwdTest;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, emailSignup, pwdSignup, confirmPwdSignup } = state;
    const data = {
      name: name.trim().toLowerCase(),
      email: emailSignup.trim().toLowerCase(),
      password: pwdSignup.trim(),
    };
    if (
      checkUser() &&
      checkEmail() &&
      checkPwd() &&
      pwdSignup === confirmPwdSignup
    ) {
      setLoading(true);
      fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((results) => {
          setLoading(false);
          if (results.status === "success") {
            next();
            setUser(results.data.user);
          } else if (results.email === "Authentication Failed") {
            dispatch({ type: "error", error: "emailValidationError" });
          } else if (!checkUser()) {
            dispatch({ type: "error", error: "nameValidationError" });
          } else if (!checkEmail()) {
            dispatch({ type: "error", error: "emailValidationError" });
          } else if (!checkPwd()) {
            dispatch({ type: "error", error: "pwdValidationError" });
          } else {
            dispatch({ type: "error", error: "confirmPwdValidationError" });
          }
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
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
          Sign Up
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          align="center"
          className={classes.modalSubtitle}
        >
          Track prices, organize travel plans and access member-only deals
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                disabled={loading}
                label="Name"
                value={state.name}
                id="name"
                name="name"
                color="secondary"
                error={state.nameValidationError ? true : false}
                helperText={
                  state.nameValidationError
                    ? "Name must be at least 4 characters with no spaces."
                    : ""
                }
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                disabled={loading}
                label="Email Address"
                value={state.emailSignup}
                id="emailSignup"
                name="emailSignup"
                type="email"
                color="secondary"
                error={
                  state.emailError || state.emailValidationError ? true : false
                }
                helperText={
                  state.emailError || state.emailValidationError
                    ? state.emailError
                      ? "This email already exists."
                      : "Please enter a valid email address."
                    : ""
                }
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                disabled={loading}
                fullWidth
                label="Password"
                value={state.pwdSignup}
                id="pwdSignup"
                name="pwdSignup"
                type="password"
                color="secondary"
                error={state.pwdValidationError ? true : false}
                helperText={
                  state.pwdValidationError
                    ? "Your password must be at least 6 characters."
                    : ""
                }
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                disabled={loading}
                label="Confirm Password"
                value={state.confirmPwdSignup}
                id="confirmPwdSignup"
                name="confirmPwdSignup"
                type="password"
                color="secondary"
                error={state.confirmPwdValidationError ? true : false}
                helperText={
                  state.confirmPwdValidationError
                    ? "Your passwords do not match."
                    : ""
                }
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </form>
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            color="primary"
            size="large"
            classes={{ root: classes.modalSubmit }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </Box>
      </div>
      <div className="modal-footer">
        <Typography
          component="p"
          variant="subtitle1"
          align="center"
          className={classes.modalFooter}
        >
          Already have an account?{" "}
          <span className={classes.link} onClick={() => signin()}>
            Sign In
          </span>
        </Typography>
      </div>
      {loading &&  <LinearProgress color="secondary" />}
    </Container>
  );
};
export default SignupOne;
