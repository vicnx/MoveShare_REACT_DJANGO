import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Avatar, Chip } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./exercice-preview.css";
import {Link } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import Fav from "./fav/fav";
import ExercicesService from "../../services/exercices.service";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function ExercicePreview({exercice}) {
  return (
    <StylesProvider injectFirst>
      <Card className="exercice_preview">
        <div className="exercice_preview_header">
          <Chip
            avatar={<Avatar><img src={exercice.author.image} /></Avatar>}
            label={exercice.author.username}
            color="primary"
            className="exercice_preview_header_author"
            size="small"
          to={'/@'+exercice.author.username} component={Link}/>
          <img src={exercice.image} />
        </div>
        <div className="exercice_preview_content">
          <Typography variant="body1" className="exercice_preview_content--title">
            {exercice.name}
          </Typography>

          <Typography variant="body2">
            Type: 
            {
              exercice.categories.map((category,index) =>
                <span key={index}>{category.name}</span>
              )
            }
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
    </StylesProvider>
    
  );
}
