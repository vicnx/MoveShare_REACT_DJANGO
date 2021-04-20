import React from "react";
import {Container} from "@material-ui/core";
import { useParams } from "react-router";

// import ExerciceList from "../../components/exercices/exercice-list";
import WorkoutDetails from "../../components/workouts/workout-details";
import {useWorkout} from '../../hooks/useWorkout'
import Loading from 'react-simple-loading';



export default function WorkoutDetail() {
  const {workoutid} = useParams();
  const {workout,loading} = useWorkout({workoutid});

  console.log(workout);

  return (
      <Container className="workouts_page">

          {
            !loading ?
              <WorkoutDetails workout={workout} />
            :
            <Loading/>
          }
      </Container>
  );
}
