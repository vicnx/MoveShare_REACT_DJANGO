import React from "react";
import {Container} from "@material-ui/core";
import { useParams } from "react-router";

// import ExerciceList from "../../components/exercices/exercice-list";
import WorkoutDetails from "../../../components/workouts/workout-details";
import {useWorkout} from '../../../hooks/useWorkout'
import Loading from 'react-simple-loading';
import bg1 from '../../../common/images/bg1.svg';
import bg2 from '../../../common/images/bg2.svg';
import bg3 from '../../../common/images/bg3.svg';
import test1 from '../../../common/images/test1.jpg';
import BackgroundSlider from 'react-background-slider'




export default function WorkoutDetail() {
  const {workoutid} = useParams();
  const {workout,loading} = useWorkout({workoutid});

  console.log(workout);

  return (
    <>
<BackgroundSlider
  images={[test1]}
  duration={10} transition={2} />
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
