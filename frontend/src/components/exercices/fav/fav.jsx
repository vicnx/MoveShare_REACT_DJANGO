import React, { useState } from "react";
import useUser from "../../../hooks/useUser";
import { useHistory } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import { Button } from "@material-ui/core";
import {useExercice} from '../../../hooks/useExercice'
import {useExercices} from '../../../hooks/useExercices'


import "./fav.css";

export default function Fav({ exercice,callBack }) {
  const { isLogged } = useUser();
  const {favExercice,unfavExercice} = useExercice(false);
  let history = useHistory();

  const favorited = () => {
    if (!isLogged) return history.push("/login");
    favExercice(exercice);
    // callBack()
    exercice.favoritesCount = exercice.favoritesCount+1;
    exercice.favorited = true;
  };

  const unfavorited = () => {
    if (!isLogged) return history.push("/login");
    unfavExercice(exercice);
    // callBack()
    exercice.favoritesCount = exercice.favoritesCount-1;
    exercice.favorited = false;
  };

  console.log(exercice.favoritesCount);
  return (
    <>
    {
      exercice.favorited ?
      <Button
        className="exercice_preview_footer--button exercice_preview_footer--button--fav exfav"
        onClick={unfavorited}>
        <Badge badgeContent={exercice.favoritesCount} max={999} color="secondary">
          <FavoriteIcon />
        </Badge>
      </Button>
      :
      <Button
        className="exercice_preview_footer--button exercice_preview_footer--button--fav"
        onClick={favorited}>
        <Badge badgeContent={exercice.favoritesCount} max={999} color="secondary">
          <FavoriteBorderIcon />
        </Badge>
      </Button>
    }
    </>
  );
}
