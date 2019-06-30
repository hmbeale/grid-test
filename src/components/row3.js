import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ButtonAppBar from "./buttonAppBar.js";
import ImgCard from "./imgCard.js";
import MediaCard from "./mediaCard.js";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import SideCol from "./sideCol.js";

const useStyles = makeStyles(theme => ({
  grid3: {
    backgroundColor: "#1A9EC5"
  },
  grid3_1: {
    backgroundColor: "#147693"
  },
  g3Text: {
    textAlign: "left",
    color: "white"
  }
}));

export default function Row3() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid3}>
      <SideCol />
      <Box></Box>
      <Grid item xs={12} sm ={8} className={classes.grid3_1}>
        <Typography Typography className={classes.g3Text}>
          These are cards
        </Typography>
        <Typography Typography className={classes.g3Text}>
          These cards are cool & tell you things about animals! Did you know a
          bird can run up to 65mph? And a cat can jump 26 feet in the air to
          catch prey? Animals are so cool.
        </Typography>
      </Grid>
      <SideCol />
    </Grid>
  );
}
