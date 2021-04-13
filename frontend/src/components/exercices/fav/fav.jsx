import React, { useState } from "react";
import useUser from "../../../hooks/useUser";
import { useHistory } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Badge from '@material-ui/core/Badge';
import { Button } from "@material-ui/core";

import "./fav.css";

export default function Fav({ exercice }) {
  const { isLogged } = useUser();
  let history = useHistory();

  const handleClick = () => {
    if (!isLogged) return history.push("/login");
    alert(exercice.id);
  };
  console.log(exercice.favoritesCount);
  return (
    <Button
      className="exercice_preview_footer--button exercice_preview_footer--button--fav"
      onClick={handleClick}>
      <Badge badgeContent={exercice.favoritesCount} max={999} color="secondary">
        <FavoriteBorderIcon />
      </Badge>
    </Button>
  );
}
