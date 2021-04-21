import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Avatar, Chip } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./exercice-preview-profile.css";
import {Link } from "react-router-dom";
import ExerciceDetail from "./exercice-details.jsx"
import { StylesProvider } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


import Fav from "./fav/fav";

export default function ExercicePreviewProfile({exercice,type=null,callBack}) {
  const [modalVisible, setModalVisible] = useState(false);
  const checkType=()=>{
    if(type=="profile"){
      return "exercice_preview_profile"
    }
    return "exercice_preview"
  }

  const onError = (e) => {
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png"
  }

  const closeModal=()=>{
    setModalVisible(false)
  }

  const moreInfo=()=>{
    setModalVisible(true)
  }

  return (
    <StylesProvider injectFirst>
      <div className="preview_profile_exercice" onClick={moreInfo}>
        <img className="preview_profile_exercice_img" src={exercice.image} onError={onError} />
        <span className="preview_profile_exercice_name">{exercice.name}</span>
        <Badge className="preview_profile_exercice_fav" badgeContent={exercice.favoritesCount} max={999} color="secondary">
          <FavoriteIcon />
        </Badge>
      </div>
      <ExerciceDetail visibleModal={modalVisible} setvisibleModal={setModalVisible}exercice={exercice} callBack={callBack}/>
    </StylesProvider>
    
  );
}
