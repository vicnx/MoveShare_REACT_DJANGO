import React, { useState} from "react";
import { Card, Button, Avatar, Chip ,Paper,Divider} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from "react-router-dom";
import {useWorkout} from '../../hooks/useWorkout';
import Difficultie from "./difficulties-preview"
import Follow from './../profile/follow/follow'
import Loading from 'react-simple-loading';
import useUser from '../../hooks/useUser'
import RemoveWorkout from './remove/remove'


import logo from '../../common/images/workouts.png';



import './workout-details.css'


export default function WorkoutDetails({workout}) {
  let history = useHistory();
  const {checkOwner} = useUser();

  // const {workout,loading} = useWorkout({workoutid});

  const onError = (e) => {
    e.target.src=logo
  }

  const goToProfile = (e)=>{
    e.stopPropagation();
    history.push('@'+workout.author.username)
  }
  const workoutDetails = (e)=>{
    e.stopPropagation();
    history.push('workout/'+workout.slug)
  }

  return (
    <StylesProvider injectFirst>
      {
        workout.length !=0 ?
          <section className="workout_details">
          <div className="workout_details_top">
            <img src={workout.image} alt="" onError={onError} className="workout_details_top_img"/>
          </div>
          <div className="workout_details_bottom">
            <div className="workout_details_bottom_name">
              {workout.name}
            </div>
            <Divider/>
            <div className="workout_details_bottom_workoutINFO">
              <div className="workout_details_bottom_bio">
                {workout.description}
              </div>
              <div className="workout_details_bottom_author">
                  <div className="authorbox">
                    <Avatar alt={workout.author.username}  src={workout.author.image} className="author_img_details"  />

                    <Typography className="username">
                      {workout.author.username}
                    </Typography>
                  </div>
                  <RemoveWorkout workout={workout}/>
                  <Follow username={workout.author.username}/>
              </div>
            </div>

            <div className="exercices_list">
              <div className="exercices_list_text">
                <Typography>Lista de Ejercicios</Typography>
              </div>
              <div className="exercices_list_list">
                  {
                    workout.difficulties.map((exercice,index) =>
                    <Difficultie
                    key={index}
                    difficultie={exercice}>
                      
                    </Difficultie>
                    )
                  }
              </div>

            </div>
          </div>
        </section>
        :
        <Loading />
      }

    </StylesProvider>
    
  );
}
