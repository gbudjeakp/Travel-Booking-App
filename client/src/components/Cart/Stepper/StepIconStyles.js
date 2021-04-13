import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

import clsx from "clsx";

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#ffb347",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "#ffb347",
  },
});

const StepIconStyles = (props) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FlightTakeoffIcon />,
    2: <LocalHotelIcon />,
    3: <DriveEtaIcon />,
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

export default StepIconStyles;
