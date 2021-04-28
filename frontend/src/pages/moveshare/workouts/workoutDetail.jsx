import React from "react";
import {Container} from "@material-ui/core";
import { useParams } from "react-router";

// import ExerciceList from "../../components/exercices/exercice-list";
import WorkoutDetails from "../../../components/workouts/workout-details";
import {useWorkout} from '../../../hooks/useWorkout'
import Loading from 'react-simple-loading';
import bg1 from '../../../common/images/backgrounds_app/bg_triangle1.jpg';
import bg2 from '../../../common/images/backgrounds_app/bg_triangle2.jpg';
import bg3 from '../../../common/images/backgrounds_app/bg_triangle3.jpg';

import BackgroundSlider from 'react-background-slider'




export default function WorkoutDetail() {
  const {workoutid} = useParams();
  const {workout,loading} = useWorkout({workoutid});

  console.log(workout);

  return (
    <>
      <BackgroundSlider images={[bg1,bg2,bg3]} duration={20} transition={1} />
      <Container className="workouts_page_details">

          {
            !loading ?
              <WorkoutDetails workout={workout} />
            :
            <Loading/>
          }
      </Container>
      </>
  );
}
