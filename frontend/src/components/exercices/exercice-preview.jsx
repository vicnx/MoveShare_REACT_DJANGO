import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Avatar, Chip } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./exercice-preview.css";
import {Link } from "react-router-dom";
import ExerciceDetail from "./exercice-details.jsx"
import { StylesProvider } from "@material-ui/core/styles";

import Rodal from 'rodal';
import '../../../node_modules/rodal/lib/rodal.css';

import Fav from "./fav/fav";

export default function ExercicePreview({exercice,type=null}) {
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
      <Card className={checkType()}>
        <div className="exercice_preview_header">
          <Chip
            avatar={<Avatar><img src={exercice.author.image} /></Avatar>}
            label={exercice.author.username}
            color="primary"
            className="exercice_preview_header_author"
            size="small"
          to={'/@'+exercice.author.username} component={Link}/>
          <img className="exer_preview_img" src={exercice.image} onError={onError} />
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
            exercice={exercice}
          ></Fav>
          <Button className="exercice_preview_footer--button exercice_preview_footer--button--info" onClick={moreInfo}>
            More Info
          </Button>
        </div>
      </Card>
      <Rodal visible={modalVisible} onClose={closeModal} className="modalrodal">
          <ExerciceDetail exercice={exercice}/>
      </Rodal>
    </StylesProvider>
    
  );
}
