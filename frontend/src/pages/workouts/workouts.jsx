import React from "react";
import {
  Container,
} from "@material-ui/core";
// import ExerciceList from "../../components/exercices/exercice-list";
import WorkoutList from "../../components/workouts/workouts-list";
import {useWorkouts} from '../../hooks/useWorkouts'


export default function WorkoutsPage() {
  const {workouts,loading} = useWorkouts();
  console.log(workouts);
  return (
      <Container className="workouts_page">
          {
              <WorkoutList workouts={workouts} />
          }
      </Container>
  );
}
