import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import errorImage from 'common/images/workouts.png';



import './workout-preview-profile.css'


export default function WorkoutPreviewProfile({workout,type=null,callBack}) {
  let history = useHistory();

  const onError = (e) => {
    e.target.src=errorImage
  }

  const workoutDetails = (e)=>{
    e.stopPropagation();
    history.push('/workout/'+workout.slug)
  }

  return (
    <StylesProvider injectFirst>
      <div className="preview_profile_workout" onClick={workoutDetails}>
        <img className="preview_profile_workout_img" src={workout.image} onError={onError} />
        <span className="preview_profile_workout_name">{workout.name}</span>
      </div>
    </StylesProvider>
    
  );
}
