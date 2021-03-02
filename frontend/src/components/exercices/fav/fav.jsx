import React, { useState } from "react";
import useUser from "../../../hooks/useUser";
import { useHistory } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Button } from "@material-ui/core";

import "./fav.css";

export default function Fav({ id }) {
  const { isLogged } = useUser();
  let history = useHistory();

  const handleClick = () => {
    if (!isLogged) return history.push("/login");
    alert(id);
  };

  return (
    <Button
      className="exercice_preview_footer--button exercice_preview_footer--button--fav"
      onClick={handleClick}
    >
      <FavoriteBorderIcon />
    </Button>
  );
}
