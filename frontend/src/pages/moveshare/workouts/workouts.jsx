import React from "react";
import {
  Container,
} from "@material-ui/core";
// import ExerciceList from "../../components/exercices/exercice-list";
import WorkoutList from "../../../components/workouts/workouts-list";
import {useWorkouts} from '../../../hooks/useWorkouts'
import Alert from '@material-ui/lab/Alert';
import './workouts.css'

import Loading from 'react-simple-loading';
import BackgroundSlider from 'react-background-slider'
import bg1 from '../../../common/images/backgrounds_app/bg_triangle1.jpg';
import bg2 from '../../../common/images/backgrounds_app/bg_triangle2.jpg';
import bg3 from '../../../common/images/backgrounds_app/bg_triangle3.jpg';



export default function WorkoutsPage() {
  const {workouts,loading} = useWorkouts();
  console.log(workouts);
  return (
      <Container className="workouts_page">
      <BackgroundSlider images={[bg1,bg2,bg3]} duration={20} transition={1} />

          {
            loading ?
            <Loading/>
            :
            workouts.length < 1 ?
            <div className="error_workouts">
              <Alert severity="error">No hay entrenamientos disponibles</Alert>
            </div>
            
            :
            <WorkoutList workouts={workouts} />


          }
      </Container>
  );
}
