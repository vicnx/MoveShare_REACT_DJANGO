import React, { useState} from "react";
import "./exercice-preview-profile.css";
import ExerciceDetail from "./exercice-details.jsx"
import { StylesProvider } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';

import imageError from '../../common/images/exercice.png'

export default function ExercicePreviewProfile({exercice,type=null,callBack}) {
  const [modalVisible, setModalVisible] = useState(false);


  const onError = (e) => {
    e.target.src=imageError
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
