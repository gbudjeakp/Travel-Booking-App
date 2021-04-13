/** @format */

import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ScrollToTop from "react-scroll-to-top";

const Scroll = () => {
  return (
    <ScrollToTop
      smooth
      component={<ExpandLessIcon />}
      style={{ backgroundColor: "#ffc14d", borderRadius: "2em" }}
    />
  );
};
export default Scroll;
