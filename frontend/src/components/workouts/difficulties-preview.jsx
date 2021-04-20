import React, { useState} from "react";
import { Card, Button, Avatar, Chip ,Paper,Divider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from "react-router-dom";
import {useWorkout} from '../../hooks/useWorkout';
import ExerciceDetail from "./../exercices/exercice-details"
import Loading from 'react-simple-loading';






import './difficultie-details.css'


export default function Difficultie({difficultie}) {
  let history = useHistory();
  console.log(difficultie);
  const [modalVisible, setModalVisible] = useState(false);

  // const {workout,loading} = useWorkout({workoutid});

  const onError = (e) => {
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png"
  }

  const goToProfile = (e)=>{
    e.stopPropagation();
    history.push('@'+difficultie.author.username)
  }
  const openExercice = (e)=>{
    e.stopPropagation();
    setModalVisible(true)

  }

  return (
    <StylesProvider injectFirst>
      {
        difficultie.length !=0 ?
          <section className="dificultie_preview" onClick={openExercice}>
            <section className="dificulties_left">
              <img src={difficultie.exercice.image} alt="" onError={onError} className="workout_details_top_img" />
            </section>
            <section className="dificulties_right">
              <div className="dificulties_right_header">
                Ejercicio: {difficultie.exercice.name}
              </div>
              <div className="dificulties_right_content">
                <div className="dificulties_right_content_info">
                  <span>Repeticiones: {difficultie.repetitions}</span>
                  <span>Duración: {difficultie.duration}</span>
                  <span>Sets: {difficultie.sets}</span>
                </div>
              </div>
            </section>
          </section>
        :
        <Loading />
      }
      <ExerciceDetail visibleModal={modalVisible} setvisibleModal={setModalVisible}exercice={difficultie.exercice}/>
    </StylesProvider>
    
  );
}
