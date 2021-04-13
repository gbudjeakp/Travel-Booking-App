/** @format */

import React from "react";
import SigninContainer from "../components/SigninContainer";

const Signin = ({ close, signup }) => {
  const goToSignup = () => signup();
  const handleModal = () => close();

  return <SigninContainer signup={goToSignup} close={handleModal} />
};

export default Signin;
