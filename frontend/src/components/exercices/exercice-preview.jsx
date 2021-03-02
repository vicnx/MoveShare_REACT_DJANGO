import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./exercice-preview.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import Fav from "./fav/fav";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function ExercicePreview() {
  const classes = useStyles();

  return (
    <Card className="exercice_preview">
      <div className="exercice_preview_header">
        <img src="https://media.revistagq.com/photos/5d8b2360e90a3a0008bddad1/master/pass/tipo%20de%20pesas%20para%20crear%20mas%20musculo.jpg" />
      </div>
      <div className="exercice_preview_content">
        <Typography variant="body1" className="exercice_preview_content--title">
          Biceps
        </Typography>
        <Typography variant="body2">
          Type: <span>arms, body</span>
        </Typography>
      </div>
      <div className="exercice_preview_footer">
        <Fav
          className="exercice_preview_footer--button exercice_preview_footer--button--info"
          id="1"
        ></Fav>
        {/* <Button className="exercice_preview_footer--button exercice_preview_footer--button--fav">
          <FavoriteBorderIcon />
        </Button> */}
        <Button className="exercice_preview_footer--button exercice_preview_footer--button--info">
          More Info
        </Button>
      </div>
    </Card>
  );
}
