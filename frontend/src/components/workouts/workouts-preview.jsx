import React, { useState} from "react";
import { Card, Button, Avatar, Chip ,Paper,Divider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';

import './workout-preview.css'


export default function WorkoutPreview({workout,type=null,callBack}) {
  const [modalVisible, setModalVisible] = useState(false);

  console.log(workout);
  const checkType=()=>{
    if(type=="profile"){
      return "exercice_preview_profile"
    }
    return "exercice_preview"
  }

  const onError = (e) => {
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png"
  }

  const printExercicesPreview = (e) =>{
    let exercicespreview = []
    for (let i = 0; i < 4; i++) {
      console.log(workout.difficulties[i]);
      if(workout.difficulties[i]){
        exercicespreview.push(workout.difficulties[i])
      }
    }
    return exercicespreview
  }

  return (
    <StylesProvider injectFirst>
        <section className="workout_preview_section">
          <section className="workout_preview_section_left">
            <img className="workout_preview_img" src={workout.image} onError={onError} />
          </section>
          <section className="workout_preview_section_right">
            <section className="workout_preview_section_right_top">
              <Typography className="workout_name">
                {workout.name}
              </Typography>
              <Divider className="workout_divider"/>
            </section>
            <section className="workout_preview_section_right_bottom">
              <div className="workout_preview_section_right_bottom_top">
                <div className="workout_desc_box">
                  <Typography className="workout_desc">
                    {workout.description}
                  </Typography>
                </div>
                <div className="exercices_content">
                  <Typography className="exercices_title">
                    Ejercicios: 
                  </Typography>
                  <Divider></Divider>
                  <div className="list_exers">
                    {
                      printExercicesPreview().map((exercice,index) =>
                      <Chip  className="chip_exer" avatar={<Avatar alt={exercice.exercice.name}  src={exercice.exercice.image}  />} key={index} label={exercice.exercice.name} />
                    )
                    }
                  </div>
                </div>
              </div>
              <div className="workout_preview_section_right_bottom_bottom">
                <div className="author_info">
                  <Avatar alt={workout.author.username}  src={workout.author.image}  />
                  <Typography className="username">
                    {workout.author.username}
                  </Typography>
                </div>
                <div className="fav_workout">
                  <FavoriteIcon/>
                  <Typography>
                    Like
                  </Typography>
                </div>
              </div>


            </section>
          </section>
            
        </section>
    </StylesProvider>
    
  );
}
