/** @format */

import React, { useState } from "react";
import { Redirect } from "react-router";
import SignupOne from "../components/SignupOne";
import SignupTwo from "../components/SignupTwo";

const Signup = ({ close, signin }) => {
  const [dash, setDash] = useState(false);
  const [next, setNext] = useState(false);
  const [user, setUser] = useState(null);

  const goToNext = () => setNext(true);
  const goToDash = () => setDash(true);
  const goToSignin = () => signin();
  const handleModal = () => close();

  return dash ? (
    <Redirect to="/explore" />
  ) : next ? (
    <SignupTwo dash={goToDash} user={user} next={next} close={handleModal} />
  ) : (
    <SignupOne
      next={goToNext}
      setUser={setUser}
      signin={goToSignin}
      close={handleModal}
    />
  );
};
export default Signup;
