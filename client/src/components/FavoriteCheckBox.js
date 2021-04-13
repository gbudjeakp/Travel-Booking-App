import React, { useState, useStyles } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import { CustomSmallerCheckBox } from "../themes/theme";


function FavoriteCheckBox() {

  const [checked, setChecked] = useState(false);
  return (
    <Grid>
      <CustomSmallerCheckBox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        icon={<Favorite style={{ color: "white" }} />}
        checkedIcon={<Favorite style={{ color: "#FFA000" }} />}
      />
    </Grid>
  );
}
export default FavoriteCheckBox;
