import React, { useState, useEffect,useContext } from "react";
import CreateWorkout from "components/moveshare/workouts/workout-create";
import {Container} from "@material-ui/core";
import Banner from 'components/moveshare/banner_page/banner'


//It is used to tell the Material Ui framework to search the css first
import { StylesProvider } from "@material-ui/core/styles";
import "./createWorkout.css";
const createWorkoutPage = () => {
  return (
    <>
      <Banner page="Nuevo Entrenamiento"/>
      <Container className="create_workout">
        <CreateWorkout />
      </Container>
    </>
);
};

export default createWorkoutPage;
