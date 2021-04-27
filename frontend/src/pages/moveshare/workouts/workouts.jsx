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



export default function WorkoutsPage() {
  const {workouts,loading} = useWorkouts();
  console.log(workouts);
  return (
      <Container className="workouts_page">
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
